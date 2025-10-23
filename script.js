// Interacciones pequeñas: toggle nav, smooth scroll, año en footer
document.addEventListener('DOMContentLoaded', () => {
  // año en footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // toggle nav móvil
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  toggle?.addEventListener('click', () => nav.classList.toggle('open'));

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav after click
        if (nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });
});