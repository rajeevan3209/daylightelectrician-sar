/* Daylight Electrician — shared header, footer and helpers.
   Every page loads data/catalog.js first, then this file. */
(function () {
  const UP = 'images/';
  const SITE = {
    wa: '6582410032', waLabel: '+65 8241 0032',
    tel: '+6531586911', telLabel: '+65 3158 6911',
    tel2: '+6569099921', tel2Label: '+65 6909 9921',
    email: 'enquiry@daylightelectrician.com',
    eastAddr: '5 Tampines Central 6, #03-38, Singapore 529482',
    hqAddr: '1090 Lower Delta Road #03-07J, Singapore 169201',
    logo: UP + '2017/01/Daylight-Electrician-Singapore-logo.png',
    logoWhite: UP + '2020/11/daylight-electrician-brand-unification-footer-white.png',
    UP
  };
  window.SITE = SITE;

  const ICONS = {
    wa: '<path fill="currentColor" d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.93.96-3.49-.23-.36a9.44 9.44 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46M20.1 3.9A11.33 11.33 0 0 0 12.05.57C5.77.57.66 5.68.66 11.96c0 2 .52 3.97 1.52 5.7L.57 23.43l5.9-1.55a11.37 11.37 0 0 0 5.58 1.42c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    bolt: '<path fill="currentColor" stroke="none" d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    tag: '<path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    star: '<path fill="currentColor" stroke="none" d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    ext: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>'
  };
  const icon = (name, cls = '') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const wa = (msg = '') => `https://wa.me/${SITE.wa}${msg ? '?text=' + encodeURIComponent(msg) : ''}`;
  const svcUrl = slug => `service.html?s=${encodeURIComponent(slug)}`;
  const initials = n => n.replace(/[^A-Za-z ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '★';
  Object.assign(window, { icon, esc, wa, svcUrl, initials });

  const page = document.body.dataset.page || '';
  const cats = window.CATS || [];
  const catalog = window.CATALOG || [];

  // ---------- Header ----------
  const mega = cats.map(c => `<div><h4>${esc(c.n)}</h4>${catalog.filter(s => s.c === c.k)
    .map(s => `<a href="${svcUrl(s.s)}">${esc(s.n)}</a>`).join('')}</div>`).join('');
  const header = `
  <div class="topbar"><div class="wrap">
    <span><b>⚡ EMA Licensed</b> · Serving all of Singapore · East branch in Tampines</span>
    <span class="hide-sm">WhatsApp <a href="${wa()}" target="_blank" rel="noopener"><b>${SITE.waLabel}</b></a> · 8AM – 10PM daily</span>
  </div></div>
  <header class="site-header"><div class="wrap">
    <a class="brand" href="index.html" aria-label="Daylight Electrician home"><img src="${SITE.logo}" alt="Daylight Electrician" width="164" height="46"></a>
    <ul class="menu" id="menu">
      <li><a href="index.html" class="${page === 'home' ? 'active' : ''}">Home</a></li>
      <li class="has-dd"><button type="button" aria-expanded="false" class="${['about', 'reviews', 'careers'].includes(page) ? 'active' : ''}">About ${icon('chev', 'chev')}</button>
        <div class="dropdown">
          <a href="about.html">About Daylight Electrician</a>
          <a href="reviews.html">Reviews</a>
          <a href="careers.html">Careers – Jobs</a>
        </div></li>
      <li class="has-dd has-mega"><button type="button" aria-expanded="false" class="${['services', 'service'].includes(page) ? 'active' : ''}">Services ${icon('chev', 'chev')}</button>
        <div class="dropdown mega">${mega}<div class="all"><a href="services.html">View all ${catalog.length} services →</a></div></div></li>
      <li><a href="portfolio.html" class="${page === 'portfolio' ? 'active' : ''}">Portfolio</a></li>
      <li><a href="pricing.html" class="${page === 'pricing' ? 'active' : ''}">Price</a></li>
      <li><a href="blog.html" class="${page === 'blog' ? 'active' : ''}">Blog</a></li>
      <li><a href="locations.html" class="${page === 'locations' ? 'active' : ''}">Locations</a></li>
      <li><a href="contact.html" class="${page === 'contact' ? 'active' : ''}">Contact</a></li>
    </ul>
    <div class="header-cta">
      <a class="btn btn-wa btn-sm" href="${wa()}" target="_blank" rel="noopener">${icon('wa')}<span>WhatsApp</span></a>
      <a class="btn btn-sun btn-sm" href="tel:${SITE.tel}">${icon('phone')}${SITE.telLabel}</a>
      <button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button>
    </div>
  </div></header>`;
  const hEl = document.getElementById('site-header');
  if (hEl) hEl.outerHTML = header;

  // ---------- Footer ----------
  const footer = `
  <footer class="site-footer"><div class="wrap">
    <div class="f-grid">
      <div>
        <img class="f-logo" src="${SITE.logoWhite}" alt="Daylight Electrician · Everyworks">
        <p>EMA-licensed electrical services for homes and businesses across Singapore. Powered by Everyworks Renovation &amp; Maintenance Singapore.</p>
      </div>
      <div><h4>Popular services</h4><ul>
        ${['power-trip-power-failure', 'light-installation-replacement-repair-services-singapore', 'power-point-power-socket-installation-replacement-singapore', 'electrical-wiring-singapore', 'electrical-distribution-board-installation-electrical-panel-electric-board', 'cctv-services']
          .map(s => catalog.find(c => c.s === s)).filter(Boolean).map(s => `<li><a href="${svcUrl(s.s)}">${esc(s.n.split('(')[0].trim())}</a></li>`).join('')}
        <li><a href="services.html"><b>All services →</b></a></li></ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="about.html">About us</a></li><li><a href="reviews.html">Reviews</a></li>
        <li><a href="portfolio.html">Portfolio</a></li><li><a href="pricing.html">Price guide</a></li>
        <li><a href="careers.html">Careers</a></li><li><a href="blog.html">Blog</a></li>
        <li><a href="locations.html">Locations &amp; service areas</a></li></ul></div>
      <div><h4>Reach us</h4><ul>
        <li><a href="${wa()}" target="_blank" rel="noopener">WhatsApp ${SITE.waLabel}</a></li>
        <li><a href="tel:${SITE.tel}">East: ${SITE.telLabel}</a></li>
        <li><a href="tel:${SITE.tel2}">General: ${SITE.tel2Label}</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li>${SITE.eastAddr}</li></ul></div>
    </div>
    <div class="f-bottom">
      <span>© ${new Date().getFullYear()} Daylight Electrician Singapore · Powered by Everyworks Renovation &amp; Maintenance Singapore</span>
      <span>No showroom, no walk-ins. Service by appointment.</span>
    </div>
  </div></footer>
  <a class="fab" href="${wa()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('wa')}</a>
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
    <button class="x" aria-label="Close">✕</button><button class="prev" aria-label="Previous">‹</button><button class="next" aria-label="Next">›</button>
    <figure><img alt=""><p></p></figure>
  </div>`;
  const fEl = document.getElementById('site-footer');
  if (fEl) fEl.outerHTML = footer;

  // ---------- Menu behaviour ----------
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menuBtn');
  menuBtn?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu?.querySelectorAll('.has-dd > button').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const li = b.parentElement, was = li.classList.contains('open');
    menu.querySelectorAll('.has-dd.open').forEach(x => { x.classList.remove('open'); x.firstElementChild.setAttribute('aria-expanded', false); });
    if (!was) { li.classList.add('open'); b.setAttribute('aria-expanded', true); }
  }));
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dd')) menu?.querySelectorAll('.has-dd.open').forEach(x => x.classList.remove('open'));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { menu?.querySelectorAll('.has-dd.open').forEach(x => x.classList.remove('open')); closeLb(); }
  });

  // ---------- Lightbox ----------
  const lb = document.getElementById('lightbox');
  let lbList = [], lbIdx = 0;
  function showLb() {
    const it = lbList[lbIdx]; if (!it) return;
    lb.querySelector('img').src = it.src; lb.querySelector('img').alt = it.cap || '';
    lb.querySelector('p').textContent = it.cap || '';
  }
  function closeLb() { lb?.classList.remove('open'); }
  window.openLightbox = (list, idx) => { lbList = list; lbIdx = idx; showLb(); lb.classList.add('open'); };
  lb?.addEventListener('click', e => {
    if (e.target.closest('.next')) { lbIdx = (lbIdx + 1) % lbList.length; showLb(); }
    else if (e.target.closest('.prev')) { lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; showLb(); }
    else if (e.target === lb || e.target.closest('.x')) closeLb();
  });
  // Full-size version of a WordPress thumbnail (strip -300x200 suffix)
  window.fullImg = src => src.replace(/-\d{2,4}x\d{2,4}(?=\.(jpe?g|png|webp)$)/i, '');

  // ---------- Reveal on scroll ----------
  window.observeReveal = () => {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  };
  document.addEventListener('DOMContentLoaded', () => window.observeReveal());

  // Hide images that fail to load (e.g. removed from the original site)
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && !e.target.dataset.keep) e.target.closest('.hide-on-error')?.remove();
  }, true);
})();
