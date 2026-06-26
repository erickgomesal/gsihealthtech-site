const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const backToTop = document.querySelector('.back-to-top');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const activeLink = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
    navLinks.forEach((link) => link.classList.remove('active'));
    activeLink?.classList.add('active');
  });
}, { threshold: 0.45 });

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener('scroll', () => {
  if (window.scrollY > 520) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const countElements = document.querySelectorAll('[data-count]');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const element = entry.target;
    const target = Number(element.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = `${target}+`;
        clearInterval(interval);
      } else {
        element.textContent = current;
      }
    }, 32);

    countObserver.unobserve(element);
  });
}, { threshold: 0.5 });

countElements.forEach((element) => countObserver.observe(element));
