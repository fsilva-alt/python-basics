/* Course-specific behaviour. Inlined after the coursekit runtime, so `window.coursekit`
   and its events are available. This example celebrates the end of the course. */
(function () {
  'use strict';

  document.addEventListener('coursekit:finish', function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#3b6cf6', '#8b5cf6', '#ffd34d', '#2fbf71', '#ff6f91'];
    for (var i = 0; i < 90; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[i % colors.length];
      piece.style.setProperty('--drift', (Math.random() * 30 - 15) + 'vw');
      piece.style.setProperty('--spin', (Math.random() * 900 - 450) + 'deg');
      piece.style.setProperty('--fall', (1.8 + Math.random() * 1.6) + 's');
      piece.style.animationDelay = Math.random() * 0.4 + 's';
      piece.addEventListener('animationend', function () { this.remove(); });
      document.body.appendChild(piece);
    }
  });

  // Chapter changes are available too, e.g. for analytics:
  // coursekit.onChapter(function (chapter) { console.log('Now reading', chapter.id); });
})();
