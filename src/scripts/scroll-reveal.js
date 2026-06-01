/**
 * scroll-reveal.js — Lightweight IntersectionObserver-based reveal.
 * Adds .is-visible to elements with [data-reveal] when they enter the viewport.
 * Animation is defined in styles/animations.css and disabled under prefers-reduced-motion.
 */
(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) return;

  var elements = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('is-visible');
        observer.unobserve(entries[i].target);
      }
    }
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
})();
