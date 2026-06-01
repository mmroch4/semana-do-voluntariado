/**
 * countdown.js — Countdown timer for the homepage hero.
 * Reads target datetime from data-event-date attribute.
 * Falls back to a static message when the event has started.
 */
(function () {
  'use strict';

  var el = document.querySelector('[data-event-date]');
  if (!el) return;

  var target = new Date(el.getAttribute('data-event-date')).getTime();
  if (isNaN(target)) return;

  var daysEl = el.querySelector('[data-countdown-days]');
  var hoursEl = el.querySelector('[data-countdown-hours]');
  var minsEl = el.querySelector('[data-countdown-minutes]');
  var secsEl = el.querySelector('[data-countdown-seconds]');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function showEndMessage() {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
    var msg = document.createElement('p');
    msg.className = 'countdown__message';
    msg.textContent = 'A Semana Solidária começou!';
    el.appendChild(msg);
  }

  function update() {
    var now = Date.now();
    var diff = target - now;

    if (diff <= 0) {
      showEndMessage();
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent = pad(mins);
    secsEl.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
})();
