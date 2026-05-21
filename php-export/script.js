// ── Sticky Nav ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  // show sticky CTA on mobile after hero
  const stickyCta = document.getElementById('sticky-cta');
  if (stickyCta) stickyCta.style.display = window.scrollY > window.innerHeight ? 'block' : 'none';
});

// ── Smooth Scroll ────────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' });
  closeMobileMenu();
}

// ── Mobile Menu ──────────────────────────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// ── Reveal on scroll ─────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Animated Counters ────────────────────────────────────
function animateCounter(el, target, duration) {
  const start = Date.now();
  const isFloat = String(target).includes('.');
  const update = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / (duration * 1000), 1);
    const val = progress * target;
    el.textContent = isFloat ? val.toFixed(1) : Math.ceil(val);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isFloat ? target.toFixed(1) : target;
  };
  requestAnimationFrame(update);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseFloat(el.getAttribute('data-target'));
      const dur = parseFloat(el.getAttribute('data-duration') || '2');
      animateCounter(el, target, dur);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

// ── Chart Bar Animation ───────────────────────────────────
const chartData = [
  { year: '2019', pct: 100 },
  { year: '2020', pct: 118 },
  { year: '2021', pct: 145 },
  { year: '2022', pct: 188 },
  { year: '2023', pct: 248 },
  { year: '2024', pct: 318 },
  { year: '2025', pct: 425 },
];
const maxPct = Math.max(...chartData.map(d => d.pct));
const chartEl = document.getElementById('chart-bars');
if (chartEl) {
  chartData.forEach(d => {
    const wrap = document.createElement('div');
    wrap.className = 'chart-bar-wrap';
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.setAttribute('data-val', '+' + d.pct + '%');
    bar.style.height = '0';
    bar.style.maxHeight = '120px';
    wrap.appendChild(bar);
    const lbl = document.createElement('div');
    lbl.className = 'chart-label';
    lbl.textContent = d.year;
    wrap.appendChild(lbl);
    chartEl.appendChild(wrap);
  });

  const chartObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const bars = chartEl.querySelectorAll('.chart-bar');
      chartData.forEach((d, i) => {
        setTimeout(() => {
          bars[i].style.height = ((d.pct / maxPct) * 120) + 'px';
        }, i * 80);
      });
      chartObs.unobserve(chartEl);
    }
  }, { threshold: 0.3 });
  chartObs.observe(chartEl);
}

// ── Form: open mailto ─────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = this.querySelector('[name="name"]').value;
    const phone   = this.querySelector('[name="phone"]').value;
    const email   = this.querySelector('[name="email"]').value;
    const company = this.querySelector('[name="company"]').value || '—';
    const message = this.querySelector('[name="message"]').value || '—';

    const subject = encodeURIComponent('SBM-Pranav Investment Inquiry — ' + name);
    const body = encodeURIComponent(
      'New investor inquiry from the SBM-Pranav landing page:\n\n' +
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Company: ' + company + '\n\n' +
      'Message:\n' + message
    );
    window.open('mailto:rshaheem311@gmail.com?subject=' + subject + '&body=' + body, '_blank');

    const ok = document.getElementById('form-success');
    if (ok) { ok.style.display = 'block'; setTimeout(() => ok.style.display = 'none', 5000); }
    this.reset();
  });
}
