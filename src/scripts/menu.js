/**
 * menu.js — Mobile hamburger menu
 * Off-canvas nav: toggle, aria-expanded, Escape key, focus management.
 * No focus trap, no backdrop, no scroll lock — this is a nav landmark, not a modal.
 */
(function () {
  'use strict';

  var toggle = document.querySelector('.header__toggle');
  var nav = document.querySelector('#main-nav');

  if (!toggle || !nav) return;

  var closeBtn = nav.querySelector('.nav__close');
  var firstLink = nav.querySelector('.nav__link');

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    nav.classList.add('is-open');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('is-open');
    toggle.focus();
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      closeMenu();
    }
  });

  // Close menu when a nav link is clicked
  var links = nav.querySelectorAll('.nav__link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      if (isOpen()) {
        closeMenu();
      }
    });
  }
})();
