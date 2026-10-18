/* =========================================================
   Portfolio interactions — vanilla JS, no dependencies
   ========================================================= */
(() => {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Year ---- */
  $("#year").textContent = new Date().getFullYear();

  /* ---- Nav: scrolled state + burger ---- */
  const nav = $("#nav");
  const burger = $(".nav-burger");
  const links = $(".nav-links");

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    const st = document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    $(".scroll-progress").style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
  });
  $$(".nav-link").forEach((l) =>
    l.addEventListener("click", () => {
      links.classList.remove("open");
      burger.classList.remove("open");
    })
  );

  /* ---- Typing effect ---- */
  const typedEl = $("#typed");
  const roles = [
    "Full-Stack AI/ML Engineer",
    "Generative AI Engineer",
    "MLOps Practitioner",
    "LLM & RAG Builder",
    "Full-Stack Developer",
    "Published Researcher",
  ];
  if (typedEl && !reduceMotion) {
    let ri = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = roles[ri];
      typedEl.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) {
        ci++;
      } else if (deleting && ci > 0) {
        ci--;
      } else if (!deleting && ci === word.length) {
        deleting = true;
        return setTimeout(tick, 1600);
      } else {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
      setTimeout(tick, deleting ? 45 : 85);
    };
    tick();
  } else if (typedEl) {
    typedEl.textContent = roles[0];
  }

  /* ---- Custom cursor — shooting star + comet trail ---- */
  const dot = $(".cursor-dot");
  const ring = $(".cursor-ring");
  if (dot && ring && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const colors = ["#35e0f0", "#8b5cff", "#ff4fd8", "#ffffff"];
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let hx = mx, hy = my, rx = mx, ry = my, px = mx, py = my;

    window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });

    const spawn = (x, y) => {
      const t = document.createElement("div");
      t.className = "star-trail";
      const c = colors[(Math.random() * colors.length) | 0];
      const sz = 3 + Math.random() * 4;
      t.style.left = x + "px";
      t.style.top = y + "px";
      t.style.width = t.style.height = sz + "px";
      t.style.background = `radial-gradient(circle, #fff, ${c} 60%, transparent 72%)`;
      t.style.boxShadow = `0 0 8px ${c}`;
      document.body.appendChild(t);
      t.addEventListener("animationend", () => t.remove());
    };

    const loop = () => {
      hx += (mx - hx) * 0.35; hy += (my - hy) * 0.35;   // star head (slight comet lag)
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;   // soft glow trails further
      dot.style.transform = `translate(${hx}px, ${hy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

      const dx = hx - px, dy = hy - py;
      const dist = Math.hypot(dx, dy);
      if (dist > 3) {
        const steps = Math.min(6, Math.max(1, Math.floor(dist / 4)));
        for (let i = 1; i <= steps; i++) {
          spawn(
            px + dx * (i / steps) + (Math.random() - 0.5) * 3,
            py + dy * (i / steps) + (Math.random() - 0.5) * 3
          );
        }
        px = hx; py = hy;
      }
      requestAnimationFrame(loop);
    };
    loop();

    $$("a, button, .skill-card, .project-card, .tl-card, .cert").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hovering"));
    });
  }

  /* ---- Reveal on scroll (with stagger) ---- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  // Stagger delay for grid items
  $$(".projects-grid, .skills-grid, .cert-grid, .pub-list").forEach((grid) => {
    $$(".reveal", grid).forEach((el, i) => el.style.setProperty("--d", `${i * 0.06}s`));
  });

  /* ---- Animated stat counters ---- */
  const counters = $$(".stat-num");
  const cObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        if (reduceMotion) { el.textContent = target; cObs.unobserve(el); return; }
        let cur = 0;
        const step = Math.max(1, Math.round(target / 30));
        const run = () => {
          cur = Math.min(target, cur + step);
          el.textContent = cur;
          if (cur < target) requestAnimationFrame(run);
        };
        run();
        cObs.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => cObs.observe(c));

  /* ---- Spotlight follow on skill cards ---- */
  $$(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  /* ---- Active nav link on scroll ---- */
  const sections = $$("main section[id]");
  const navMap = new Map($$(".nav-link").map((l) => [l.getAttribute("href").slice(1), l]));
  const sObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navMap.forEach((l) => l.classList.remove("active"));
          navMap.get(e.target.id)?.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => sObs.observe(s));

  /* ---- 3D tilt on cards (pointer-reactive depth) ---- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const tiltEls = $$(".project-card, .skill-card, .edu-card");
    const MAX = 9; // degrees
    tiltEls.forEach((el) => {
      let raf = 0;
      el.style.transformStyle = "preserve-3d";
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform =
            `perspective(900px) rotateX(${(-py * MAX).toFixed(2)}deg) ` +
            `rotateY(${(px * MAX).toFixed(2)}deg) translateY(-6px)`;
        });
      });
      el.addEventListener("mouseleave", () => {
        cancelAnimationFrame(raf);
        el.style.transform = "";
      });
    });
  }
})();
