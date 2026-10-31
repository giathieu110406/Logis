/**
 * LogisQuest Mobile Text Optimization powered by Pretext (@chenglou/pretext)
 * Calculates high-performance text metrics off-DOM via canvas arithmetic
 * to balance multiline headlines and eliminate typographical orphans on mobile.
 */
(function () {
  'use strict';

  function initPretextMobile() {
    if (typeof window.Pretext === 'undefined') {
      console.warn('[PretextMobile] Pretext core engine not found.');
      return;
    }

    const { prepareWithSegments, layoutWithLines, measureLineStats, measureNaturalWidth } = window.Pretext;

    // Balance multiline headings and prevent single-word orphan lines
    function balanceElementTypography(el) {
      if (!el || el.dataset.pretextProcessed) return;

      const computed = window.getComputedStyle(el);
      const originalText = el.innerText.trim();
      if (!originalText || originalText.length < 10) return;

      // Extract font specifier for canvas
      const font = `${computed.fontStyle} ${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;
      const parentWidth = el.parentElement ? el.parentElement.clientWidth : window.innerWidth;
      const availableWidth = Math.max(240, parentWidth - 8);

      try {
        const prepared = prepareWithSegments(originalText, font, {
          whiteSpace: 'normal',
          wordBreak: 'normal'
        });

        const stats = measureLineStats(prepared, availableWidth);
        if (stats.lineCount > 1) {
          const layout = layoutWithLines(prepared, availableWidth, parseFloat(computed.lineHeight) || 24);
          if (layout && layout.lines && layout.lines.length > 1) {
            const lastLine = layout.lines[layout.lines.length - 1];
            const wordsInLastLine = lastLine.text.trim().split(/\s+/).filter(Boolean);

            // If the last line contains an orphan (only 1 word), merge with previous word via NBSP
            if (wordsInLastLine.length === 1) {
              const allWords = originalText.split(/\s+/).filter(Boolean);
              if (allWords.length >= 2) {
                const orphan = allWords.pop();
                const prevWord = allWords.pop();
                el.innerText = [...allWords, `${prevWord}\u00A0${orphan}`].join(' ');
              }
            }
          }
        }
        el.dataset.pretextProcessed = '1';
      } catch (err) {
        // Graceful fallback
        console.debug('[PretextMobile] layout calculation fallback:', err);
      }
    }

    // Auto-fit heading size on narrow viewports (< 380px)
    function autoFitHeadlines() {
      if (window.innerWidth > 768) return;

      const headlines = document.querySelectorAll(
        '#homeView .quychien-gameplay-headline, ' +
        '#block1-showcase .showcase-main-headline, ' +
        '#block4-pillars .pillars-headline-modern, ' +
        '#block5-guide .headline-part-top, ' +
        '#block5-guide .headline-part-bottom, ' +
        '.gp-hero-title'
      );

      headlines.forEach(h => {
        balanceElementTypography(h);
      });
    }

    // Public API
    window.PretextMobile = {
      balanceElementTypography,
      autoFitHeadlines
    };

    autoFitHeadlines();

    // Re-check on viewport resize
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        document.querySelectorAll('[data-pretext-processed]').forEach(function (node) {
          delete node.dataset.pretextProcessed;
        });
        autoFitHeadlines();
      }, 250);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPretextMobile);
  } else {
    initPretextMobile();
  }
})();
