const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* Header: solid background after scrolling past the top */
function initHeader() {
  const header = $('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* Highlight the nav link of the section in view */
function initActiveNav() {
  const links = $$('.nav__link');
  const map = new Map(links.map(l => [l.hash.slice(1), l]));
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const link = map.get(entry.target.id);
        if (link) link.classList.toggle('is-active', entry.isIntersecting);
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  map.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

/* Dialogs: [data-open="id"] opens, [data-close] closes, backdrop click closes */
function initDialogs() {
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open]');
    if (opener) {
      const dialog = document.getElementById(opener.dataset.open);
      const current = opener.closest('dialog');
      if (current && current !== dialog) current.close();
      if (dialog && !dialog.open) dialog.showModal();
      return;
    }
    const closer = e.target.closest('[data-close]');
    if (closer) closer.closest('dialog')?.close();
  });

  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', e => {
      if (e.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      const inside =
        e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
  });
}

/* Toast */
let toastTimer;
function showToast() {
  const toast = $('[data-toast]');
  if (!toast) return;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3500);
}

/* Forms: native validation + success toast (no backend in this demo) */
function initForms() {
  $$('[data-form]').forEach(form => {
    form.addEventListener('input', e => {
      if (e.target.classList.contains('is-invalid') && e.target.checkValidity()) {
        e.target.classList.remove('is-invalid');
      }
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const fields = $$('.field__input', form);
      fields.forEach(f => f.classList.toggle('is-invalid', !f.checkValidity()));
      const firstInvalid = fields.find(f => !f.checkValidity());
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      const data = Object.fromEntries(new FormData(form));
      console.info('Form submitted:', data);
      form.reset();
      form.closest('dialog')?.close();
      showToast();
    });
  });
}

/* Formats carousel: native scroll-snap + prev/next buttons */
function initCarousel() {
  const track = $('[data-carousel]');
  const nav = $('[data-carousel-nav]');
  if (!track || !nav) return;
  const [prev, next] = $$('button', nav);

  const step = () => {
    const item = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
  };
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    nav.hidden = max <= 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  };

  nav.addEventListener('click', e => {
    const btn = e.target.closest('[data-dir]');
    if (btn) track.scrollBy({ left: step() * Number(btn.dataset.dir), behavior: 'smooth' });
  });
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(track);
}

/* Google Maps iframe loads only when the contact section approaches */
function initLazyMap() {
  const box = $('[data-map]');
  const iframe = box && $('iframe', box);
  if (!iframe) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      iframe.src = iframe.dataset.src;
      observer.disconnect();
    },
    { rootMargin: '300px 0px' },
  );
  observer.observe(box);
}

/* Reveal-on-scroll with a small stagger for siblings */
function initReveal() {
  const items = $$('[data-reveal]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach(el => {
    const siblings = $$(':scope > [data-reveal]', el.parentElement);
    const index = siblings.indexOf(el);
    if (index > 0) el.style.setProperty('--delay', `${index * 0.1}s`);
    observer.observe(el);
  });
}

function initYear() {
  const el = $('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
}

initHeader();
initDialogs();
initForms();
initCarousel();
initLazyMap();
initReveal();
initActiveNav();
initYear();
