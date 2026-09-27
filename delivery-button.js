// Shared header/sidebar animation. Resize the button in CSS; its artwork follows.
function initDeliveryButtons(onComplete) {
  const buttons = document.querySelectorAll('.order-button');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const resize = new ResizeObserver(entries => {
    entries.forEach(({ target }) => {
      target.style.setProperty('--delivery-scale', Math.min(target.clientWidth / 240, target.clientHeight / 64));
    });
  });

  function reset(button) {
    button.classList.remove('is-adding', 'is-animating', 'is-complete');
    button.removeAttribute('aria-disabled');
    button.removeAttribute('aria-busy');
  }

  buttons.forEach(button => {
    const scene = document.createElement('span');
    scene.className = 'delivery-scene';
    scene.setAttribute('aria-hidden', 'true');
    scene.append(...button.querySelectorAll(':scope > .cart-layer, :scope > .package, :scope > .truck, :scope > .road'));
    button.append(scene);
    resize.observe(button);

    button.addEventListener('click', event => {
      event.stopPropagation();
      if (button.hasAttribute('aria-busy')) return;
      if (reducedMotion.matches) {
        onComplete();
        return;
      }
      button.setAttribute('aria-disabled', 'true');
      button.setAttribute('aria-busy', 'true');
      button.classList.add('is-adding');
    });

    button.addEventListener('animationend', event => {
      if (event.animationName === 'cart-cycle' && button.classList.contains('is-adding')) {
        button.classList.remove('is-adding');
        button.classList.add('is-animating');
      } else if (event.animationName === 'nav-truck-drive' && button.classList.contains('is-animating')) {
        reset(button);
        onComplete();
      }
    });
  });

  reducedMotion.addEventListener('change', () => buttons.forEach(reset));
  window.addEventListener('pageshow', () => buttons.forEach(reset));
}
