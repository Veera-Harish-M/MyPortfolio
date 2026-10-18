/* =========================================================
   Scroll-driven 3D Transformer (GPT-style) — Three.js
   Token embeddings → causal multi-head self-attention →
   stacked transformer blocks → next-token generation.
   The whole stack rolls as you scroll; binary token data
   streams along the attention edges.
   ========================================================= */
(() => {
  "use strict";

  const canvas = document.getElementById("scene3d");
  if (!canvas || typeof THREE === "undefined") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;

  const renderer = new THREE.WebGLRenderer({
    canvas, alpha: true, antialias: true, powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100);

  const group = new THREE.Group();
  scene.add(group);

  // Palette: cyan embeddings → violet blocks → magenta logits
  const cIn = new THREE.Color("#35e0f0");
  const cHid = new THREE.Color("#8b5cff");
  const cOut = new THREE.Color("#ff4fd8");
  const layerColor = (f) => (f < 0.5
    ? cIn.clone().lerp(cHid, f / 0.5)
    : cHid.clone().lerp(cOut, (f - 0.5) / 0.5));
  const white = new THREE.Color(0xffffff);

  /* ---- Transformer topology: S token positions arranged as rings, B blocks stacked ---- */
  const S = coarse ? 6 : 9;            // tokens per ring (sequence positions)
  const B = coarse ? 4 : 5;            // transformer blocks (rings, stacked on Y)
  const L = B;                         // shader "front" counts blocks
  const ringR = coarse ? 5 : 6.6;      // ring radius
  const layerGapY = 7.0;               // block spacing
  const topY = ((B - 1) / 2) * layerGapY;
  const totalH = (B - 1) * layerGapY;

  const neurons = [];                  // { x,y,z, layer(block), pos, color }
  const grid = [];                     // grid[b][p] = neuron index
  for (let b = 0; b < B; b++) {
    const y = topY - b * layerGapY;
    const col = layerColor(b / (B - 1));
    const twist = b * 0.3;             // helix twist so attention edges spiral
    const row = [];
    for (let p = 0; p < S; p++) {
      const a = (p / S) * Math.PI * 2 + twist;
      const x = Math.cos(a) * ringR;
      const z = Math.sin(a) * ringR;
      row.push(neurons.length);
      neurons.push({ x, y, z, layer: b, pos: p, color: col });
    }
    grid.push(row);
  }
  const N = neurons.length;

  camera.position.set(0, topY + 5, 13.5);

  /* ---- Neuron (token) points — shader lights blocks up on scroll ---- */
  const nGeo = new THREE.BufferGeometry();
  const nPos = new Float32Array(N * 3);
  const nCol = new Float32Array(N * 3);
  const nLayer = new Float32Array(N);
  neurons.forEach((ne, i) => {
    nPos[i * 3] = ne.x; nPos[i * 3 + 1] = ne.y; nPos[i * 3 + 2] = ne.z;
    nCol[i * 3] = ne.color.r; nCol[i * 3 + 1] = ne.color.g; nCol[i * 3 + 2] = ne.color.b;
    nLayer[i] = ne.layer;
  });
  nGeo.setAttribute("position", new THREE.BufferAttribute(nPos, 3));
  nGeo.setAttribute("aColor", new THREE.BufferAttribute(nCol, 3));
  nGeo.setAttribute("aLayer", new THREE.BufferAttribute(nLayer, 1));

  const nMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uFront: { value: 0 }, uTime: { value: 0 },
      uSize: { value: 165 * renderer.getPixelRatio() },
    },
    vertexShader: `
      attribute vec3 aColor;
      attribute float aLayer;
      uniform float uFront; uniform float uTime; uniform float uSize;
      varying vec3 vColor; varying float vGlow;
      void main() {
        vColor = aColor;
        float diff = uFront - aLayer;
        float act = smoothstep(-0.7, 0.35, diff);
        float pulse = exp(-pow((diff) * 1.6, 2.0));
        float breathe = 0.9 + 0.1 * sin(uTime * 2.0 + aLayer * 1.7);
        vGlow = (0.45 + act * 0.8 + pulse * 1.2) * breathe;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * (0.6 + act * 0.9 + pulse * 1.1) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vColor; varying float vGlow;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.05, d);
        gl_FragColor = vec4(vColor * vGlow, a * clamp(vGlow, 0.0, 1.0));
      }
    `,
  });
  group.add(new THREE.Points(nGeo, nMat));

  /* ---- Ring outline per block (makes each layer clearly visible) ---- */
  const ringMats = [];
  for (let b = 0; b < B; b++) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(S * 3);
    grid[b].forEach((ni, k) => {
      const n = neurons[ni]; pos[k * 3] = n.x; pos[k * 3 + 1] = n.y; pos[k * 3 + 2] = n.z;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineBasicMaterial({
      color: neurons[grid[b][0]].color.clone(), transparent: true, opacity: 0.35,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    group.add(new THREE.LineLoop(geo, mat));
    ringMats.push(mat);
  }

  /* ---- Causal attention edges between stacked blocks (q ≤ p) ---- */
  const edges = [];                    // { a, b, layer } — the forward/attention flow
  for (let b = 0; b < B - 1; b++) {
    for (let p = 0; p < S; p++) {
      for (let q = 0; q <= p; q++) {
        edges.push({ a: grid[b][q], b: grid[b + 1][p], layer: b });
      }
    }
  }
  const E = edges.length;
  const buildLines = (list, getA, getB, opacity) => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(list.length * 6);
    const col = new Float32Array(list.length * 6);
    list.forEach((e, i) => {
      const A = neurons[getA(e)], C = neurons[getB(e)];
      pos.set([A.x, A.y, A.z, C.x, C.y, C.z], i * 6);
      col.set([A.color.r, A.color.g, A.color.b, C.color.r, C.color.g, C.color.b], i * 6);
    });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const lines = new THREE.LineSegments(geo, mat);
    group.add(lines);
    return mat;
  };
  const eMat = buildLines(edges, (e) => e.a, (e) => e.b, 0.2);

  /* ---- Intra-block self-attention lines (causal, horizontal) ---- */
  const attn = [];
  for (let b = 0; b < B; b++) {
    for (let p = 1; p < S; p++) {
      for (let q = 0; q < p; q++) attn.push([grid[b][q], grid[b][p]]);
    }
  }
  const aMat = buildLines(attn, (e) => e[0], (e) => e[1], 0.1);

  /* ---- Token/data bits (0 / 1) streaming along the attention edges ---- */
  const makeGlyph = (ch) => {
    const s = 128, cv = document.createElement("canvas"); cv.width = cv.height = s;
    const g = cv.getContext("2d");
    g.font = "700 78px 'JetBrains Mono', ui-monospace, monospace";
    g.textAlign = "center"; g.textBaseline = "middle";
    g.shadowColor = "rgba(255,255,255,0.8)"; g.shadowBlur = 8;
    g.fillStyle = "#ffffff";
    g.fillText(ch, s / 2, s / 2 + 2);
    const tex = new THREE.CanvasTexture(cv); tex.needsUpdate = true; return tex;
  };
  const glyphTex = [makeGlyph("0"), makeGlyph("1")];

  const makeLabel = (text, accent, size) => {
    size = size || 48;
    const cv = document.createElement("canvas");
    const g = cv.getContext("2d");
    const font = "800 " + size + "px 'Syne', 'Space Grotesk', sans-serif";
    g.font = font;
    const pad = size * 0.6;
    cv.width = Math.ceil(g.measureText(text).width + pad * 2);
    cv.height = Math.ceil(size * 1.7);
    g.font = font;                       // context resets when the canvas is resized
    g.textAlign = "center"; g.textBaseline = "middle";
    g.shadowColor = accent; g.shadowBlur = size * 0.4;
    g.fillStyle = "#ffffff";
    g.fillText(text, cv.width / 2, cv.height / 2);
    const tex = new THREE.CanvasTexture(cv); tex.needsUpdate = true; return tex;
  };
  // Scale a label sprite to its texture aspect so text never stretches or clips
  const fitLabel = (sp, tex, h) => {
    sp.scale.set(h * (tex.image.width / tex.image.height), h, 1);
  };

  const PULSES = coarse ? 34 : 74;
  const pulses = [];
  const assignPulse = (p, front) => {
    const maxL = Math.max(0, Math.min(L - 2, Math.floor(front)));
    const e = edges[(Math.random() * E) | 0];
    const chosen = e.layer <= maxL ? e : edges.find((x) => x.layer <= maxL) || e;
    p.a = chosen.a; p.b = chosen.b; p.layer = chosen.layer;
    p.t = Math.random() * 0.15; p.speed = 0.45 + Math.random() * 0.7;
    p.bit = (Math.random() * 2) | 0;
    if (p.sprite) p.sprite.material.map = glyphTex[p.bit];
  };
  for (let i = 0; i < PULSES; i++) {
    const mat = new THREE.SpriteMaterial({
      map: glyphTex[0], transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, opacity: 0.95,
    });
    const sp = new THREE.Sprite(mat);
    sp.scale.setScalar(0.9);
    group.add(sp);
    const p = { sprite: sp }; assignPulse(p, 0); pulses.push(p);
  }
  const pulseColor = new THREE.Color();

  /* ---- Prompt tokens (top) + next-token candidates (bottom) ---- */
  const PROMPT = ["I", "build", "neural", "nets", "that", "learn", "and", "ship", "∞"].slice(0, S);
  const promptSprites = [];
  grid[0].forEach((ni, p) => {
    const ne = neurons[ni];
    const tex = makeLabel(PROMPT[p] || "·", "#35e0f0", 46);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false, opacity: 0,
    }));
    sp.position.set(ne.x, ne.y + 1.7, ne.z);
    fitLabel(sp, tex, 0.82);
    group.add(sp);
    promptSprites.push(sp);
  });

  const OUT_TOKENS = ["FUTURE", "MODELS", "CODE"];
  const PREDICTED = 0;
  const bottomY = topY - (B - 1) * layerGapY;   // centre of the output ring
  const outLabels = [];
  OUT_TOKENS.forEach((tok, i) => {
    const win = i === PREDICTED;
    const tex = makeLabel(tok, win ? "#ff4fd8" : "#8b5cff", 50);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false, opacity: 0,
    }));
    sp.position.set(0, bottomY + (1 - i) * 1.7, 0);
    fitLabel(sp, tex, 1.05);
    group.add(sp);
    outLabels.push({ sp, win });
  });

  /* ---- Per-block labels (added to scene so they stay beside each ring) ---- */
  const LAYER_NAMES = B >= 5
    ? ["EMBEDDINGS", "SELF-ATTENTION", "FEED-FORWARD", "ADD & NORM", "LOGITS"]
    : ["EMBEDDINGS", "SELF-ATTENTION", "FEED-FORWARD", "LOGITS"];
  const blockLabels = [];
  for (let b = 0; b < B; b++) {
    const name = LAYER_NAMES[b] || ("LAYER " + b);
    const accent = b === 0 ? "#35e0f0" : b === B - 1 ? "#ff4fd8" : "#8b5cff";
    const tex = makeLabel(name, accent, 36);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false, opacity: 0,
    }));
    sp.position.set(0, topY - b * layerGapY - 3.8, 0);   // just below its ring
    fitLabel(sp, tex, 1.3);
    scene.add(sp);
    blockLabels.push({ sp, layer: b, baseX: 0 });
  }

  /* ---- Stage HUD overlay (GPT pipeline) ---- */
  const stages = [
    ["01", "Tokenize", "text → tokens"],
    ["02", "Embeddings", "+ positional encoding"],
    ["03", "Self-Attention", "Q · K · V  (causal)"],
    ["04", "Feed-Forward", "MLP + residual ×N"],
    ["05", "Next Token", "generating · " + OUT_TOKENS[PREDICTED]],
  ];
  const hud = document.createElement("div");
  hud.className = "nn-hud";
  hud.setAttribute("aria-hidden", "true");
  hud.innerHTML =
    '<span class="nn-hud-idx">01</span>' +
    '<span class="nn-hud-txt"><b class="nn-hud-title">Tokenize</b>' +
    '<span class="nn-hud-sub">text → tokens</span></span>' +
    '<span class="nn-hud-bar"><i></i></span>';
  document.body.appendChild(hud);
  const hudIdx = hud.querySelector(".nn-hud-idx");
  const hudTitle = hud.querySelector(".nn-hud-title");
  const hudSub = hud.querySelector(".nn-hud-sub");
  const hudBar = hud.querySelector(".nn-hud-bar i");
  let lastStage = -1;

  /* ---- State & events ---- */
  let scrollT = 0, targetMX = 0, targetMY = 0, mx = 0, my = 0;
  const clock = new THREE.Clock();

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    nMat.uniforms.uSize.value = 165 * renderer.getPixelRatio();
  };
  window.addEventListener("resize", onResize, { passive: true });

  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    scrollT = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (!coarse) {
    window.addEventListener("mousemove", (e) => {
      targetMX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  /* ---- Render loop ---- */
  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
  const render = () => {
    const dt = Math.min(0.05, clock.getDelta());
    const t = clock.elapsedTime;
    mx += (targetMX - mx) * 0.05;
    my += (targetMY - my) * 0.05;

    // Activation front advances block-by-block with scroll
    const front = scrollT * (L - 0.2);
    nMat.uniforms.uFront.value = front;
    nMat.uniforms.uTime.value = t;

    // Tower weaves across the screen as you scroll: right → left → right → left (ends left)
    const gx = Math.cos(scrollT * Math.PI * 3) * 6;

    // Edges brighten as the model "attends"; attention lines shimmer
    eMat.opacity = 0.16 + scrollT * 0.16;
    aMat.opacity = 0.08 + Math.abs(Math.sin(t * 0.6)) * 0.06 + scrollT * 0.05;

    // Each block's ring glows brighter as the camera reaches that layer
    for (let b = 0; b < ringMats.length; b++) {
      const d = b - front;
      ringMats[b].opacity = 0.3 + 0.6 * Math.exp(-d * d * 0.7);
    }
    // Show the label of the layer currently in focus (follows the weaving tower)
    for (let i = 0; i < blockLabels.length; i++) {
      const d = blockLabels[i].layer - front;
      blockLabels[i].sp.material.opacity = Math.exp(-d * d * 2.6) * 0.95;
      blockLabels[i].sp.position.x = blockLabels[i].baseX + gx;
    }

    // Camera flies DOWN through the ring tower at a tilt (never flat)
    const camY = topY - scrollT * totalH;
    camera.position.set(0, camY + 5, 13.5);
    camera.lookAt(0, camY - 4, 0);

    // Full-screen tower that ROLLS as you scroll + mouse parallax; weaves side to side
    group.position.x = gx;
    group.rotation.y = scrollT * Math.PI * 2 + mx * 0.25 + t * 0.05;
    group.rotation.z = my * 0.03;

    // Stream the token bits along the attention edges
    for (let i = 0; i < PULSES; i++) {
      const p = pulses[i];
      p.t += p.speed * dt;
      if (p.t >= 1) assignPulse(p, front);
      const A = neurons[p.a], C = neurons[p.b];
      const e = p.t * p.t * (3 - 2 * p.t);
      tmpA.set(A.x, A.y, A.z); tmpB.set(C.x, C.y, C.z);
      tmpA.lerp(tmpB, e);
      const sp = p.sprite;
      sp.position.copy(tmpA);
      pulseColor.copy(cIn).lerp(cOut, p.layer / (L - 1)).lerp(white, 0.4);
      sp.material.color.copy(pulseColor);
      const fade = Math.sin(Math.PI * p.t);
      sp.material.opacity = 0.12 + fade * 0.6;
      sp.scale.setScalar(0.5 + fade * 0.32);
    }

    // Prompt tokens fade in at the top, out as we descend
    const inVis = 1 - THREE.MathUtils.smoothstep(scrollT, 0.04, 0.24);
    for (let i = 0; i < promptSprites.length; i++) promptSprites[i].material.opacity = inVis * 0.38;

    // Next-token candidates resolve near the end; predicted token glows
    const reveal = THREE.MathUtils.smoothstep(scrollT, 0.72, 0.98);
    for (let i = 0; i < outLabels.length; i++) {
      const l = outLabels[i];
      l.sp.material.opacity = reveal * (l.win ? 1 : 0.4);
      const pulse = l.win ? 1 + Math.sin(t * 4) * 0.07 : 1;
      l.sp.scale.set(3.1 * pulse, 1.0 * pulse, 1);
      l.sp.material.color.setHex(l.win ? 0xffffff : 0x9aa3b8);
    }

    // Update HUD stage
    const si = Math.min(stages.length - 1, Math.floor(scrollT * stages.length));
    if (si !== lastStage) {
      lastStage = si;
      const [idx, title, sub] = stages[si];
      hudIdx.textContent = idx; hudTitle.textContent = title; hudSub.textContent = sub;
    }
    hudBar.style.width = (scrollT * 100).toFixed(1) + "%";

    renderer.render(scene, camera);
    if (!reduceMotion) requestAnimationFrame(render);
  };
  render();
})();
