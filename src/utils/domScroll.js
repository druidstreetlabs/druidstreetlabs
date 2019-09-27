export function toggleScroll(turnScrollOn) {
  const appEl = document.body;

  if (appEl) {
    if (turnScrollOn) {
      const scrollY = appEl.style.top;
      appEl.style.position = '';
      appEl.style.top = '';
      appEl.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    } else {
      appEl.style.top = `-${window.scrollY}px`;
      appEl.style.position = 'fixed';
      appEl.style.width = '100%';
    }
  }
}
