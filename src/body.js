(function () {
  'use strict';

  // Your code here...
  const cssText = `
  /* CSS_PLACEHOLDER */
  `;
  GM_addStyle(cssText);

  const style = document.createElement('style')
  const hides = [].filter(Boolean)

  style.innerHTML = [
    `${hides.join(',')}{ display: none !important; }`,
  ].join('')

  document.body.appendChild(style)
})();