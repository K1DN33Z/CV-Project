// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.site-header__nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  nav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-active');
  document.body.classList.toggle('menu-open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-list__item a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});