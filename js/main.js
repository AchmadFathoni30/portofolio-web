(function () {
  "use strict";

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      toggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.getAttribute("id");
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach(function (s) { spy.observe(s); });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  var revObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          var delay = (e.target.dataset.delay ? +e.target.dataset.delay : 0);
          setTimeout(function () { e.target.classList.add("in"); }, delay);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  // Stagger siblings in grids
  document.querySelectorAll(".projects-grid, .skills-grid, .contact-grid, .about-cards, .hero-stats").forEach(function (grid) {
    grid.querySelectorAll(".reveal").forEach(function (el, i) { el.dataset.delay = i * 80; });
  });
  revealEls.forEach(function (el) { revObserver.observe(el); });

  /* ---------- Typing effect ---------- */
  var typed = document.getElementById("typed");
  if (typed) {
    var words = ["Software Developer", "Backend Engineer", "Fullstack Developer", "Golang Developer"];
    var w = 0, c = 0, deleting = false;
    function type() {
      var current = words[w];
      if (!deleting) {
        typed.textContent = current.slice(0, ++c);
        if (c === current.length) { deleting = true; return setTimeout(type, 1600); }
      } else {
        typed.textContent = current.slice(0, --c);
        if (c === 0) { deleting = false; w = (w + 1) % words.length; }
      }
      setTimeout(type, deleting ? 45 : 85);
    }
    type();
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll(".stat-num");
  var counterObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = +el.dataset.target;
        var suffix = el.dataset.suffix || "";
        var dur = 1400, start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (c) { counterObserver.observe(c); });

  /* ---------- Project filtering ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".project-card");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.dataset.filter;
      cards.forEach(function (card) {
        var tags = card.dataset.tags || "";
        var show = f === "all" || tags.indexOf(f) !== -1;
        card.classList.toggle("hide", !show);
      });
    });
  });
})();
