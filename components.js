(function () {
  const inSubdir = window.location.pathname.includes('/services/');
  const b = inSubdir ? '../' : '';

  const p = window.location.pathname;
  const isHome     = /index\.html$/.test(p) || /\/$/.test(p);
  const isServices = p.includes('our-services') || p.includes('/services/');
  const isAppInfo  = p.includes('app-info');
  const isAbout    = p.includes('about-us');

  function active(cond) { return cond ? ' class="active"' : ''; }

  const tikTok = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`;
  const ig = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
  const email = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;

  document.getElementById('site-header').outerHTML = `
<header>
  <nav class="container">
    <div class="nav-left">
      <a href="https://apps.apple.com/us/app/rec-my-recommendation/id6753791197" target="_blank">
        <img class="nav-logo-img" src="${b}images/shared/logo.webp" alt="REC app icon" />
      </a>
    </div>
    <div class="nav-right">
      <ul class="nav-links">
        <li><a href="${b}index.html"${active(isHome)}>Home</a></li>
        <li>
          <a href="${b}our-services.html"${active(isServices)}>Our Services <span style="font-size:9px;vertical-align:middle;">&#9660;</span></a>
          <ul>
            <li><a href="${b}services/beauty-services.html">Beauty Services</a></li>
            <li><a href="${b}services/fitness.html">Fitness</a></li>
            <li><a href="${b}services/sports.html">Sports</a></li>
            <li><a href="${b}services/real-estate.html">Real Estate</a></li>
            <li><a href="${b}services/legal-services.html">Legal Services</a></li>
            <li><a href="${b}services/other.html">Other</a></li>
          </ul>
        </li>
        <li><a href="${b}app-info.html"${active(isAppInfo)}>App Info</a></li>
        <li><a href="${b}about-us.html"${active(isAbout)}>Who We Are</a></li>
      </ul>
      <div class="nav-socials">
        <a href="https://www.tiktok.com/@myrecommendationapp?_r=1&_t=ZP-978GpXikBrj" target="_blank" aria-label="TikTok">${tikTok}</a>
        <a href="https://www.instagram.com/myrecommendationapp" target="_blank" aria-label="Instagram">${ig}</a>
      </div>
      <a href="https://apps.apple.com/us/app/rec-my-recommendation/id6753791197" target="_blank" class="btn btn-blue nav-dl-btn">Download App</a>
    </div>
    <button class="hamburger" id="ham" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mob">
    <a href="${b}index.html">Home</a>
    <a href="${b}our-services.html">Our Services</a>
    <a href="${b}services/beauty-services.html" class="sub">&#8250; Beauty Services</a>
    <a href="${b}services/fitness.html" class="sub">&#8250; Fitness</a>
    <a href="${b}services/sports.html" class="sub">&#8250; Sports</a>
    <a href="${b}services/real-estate.html" class="sub">&#8250; Real Estate</a>
    <a href="${b}services/legal-services.html" class="sub">&#8250; Legal Services</a>
    <a href="${b}services/other.html" class="sub">&#8250; Other</a>
    <a href="${b}app-info.html">App Info</a>
    <a href="${b}about-us.html">Who We Are</a>
    <div class="mob-cta">
      <a href="https://apps.apple.com/us/app/rec-my-recommendation/id6753791197" target="_blank" class="btn btn-blue" style="width:100%;justify-content:center;">Download App</a>
    </div>
  </div>
</header>`;

  document.getElementById('site-footer').outerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col-brand">
        <a href="${b}index.html">
          <img class="footer-logo" src="${b}images/shared/logo.webp" alt="REC app icon" />
        </a>
        <p class="footer-desc">Discover and recommend top local service professionals in your community.</p>
        <div class="footer-socials">
          <a href="https://www.tiktok.com/@myrecommendationapp?_r=1&_t=ZP-978GpXikBrj" target="_blank" aria-label="TikTok">${tikTok}</a>
          <a href="https://www.instagram.com/myrecommendationapp" target="_blank" aria-label="Instagram">${ig}</a>
        </div>
      </div>
      
      <div class="footer-col-links">
        <h3>Company</h3>
        <ul>
          <li><a href="${b}index.html">Home</a></li>
          <li><a href="${b}about-us.html">Who We Are</a></li>
          <li><a href="${b}app-info.html">App Info</a></li>
          <li><a href="${b}terms.html">Terms & Conditions</a></li>
        </ul>
      </div>
      
      <div class="footer-col-links">
        <h3>Services</h3>
        <ul>
          <li><a href="${b}our-services.html">Our Services</a></li>
          <li><a href="${b}services/beauty-services.html">Beauty Services</a></li>
          <li><a href="${b}services/fitness.html">Fitness</a></li>
          <li><a href="${b}services/sports.html">Sports</a></li>
          <li><a href="${b}services/real-estate.html">Real Estate</a></li>
          <li><a href="${b}services/legal-services.html">Legal Services</a></li>
          <li><a href="${b}services/other.html">Other</a></li>
        </ul>
      </div>
      
      <div class="footer-col-contact">
        <h3>Contact</h3>
        <a href="mailto:support@myrecommendation.com" class="footer-email-link">
          <span class="footer-email-icon">${email}</span>
          support@myrecommendation.com
        </a>
        <div class="footer-cta-buttons">
          <a href="https://apps.apple.com/us/app/rec-my-recommendation/id6753791197" target="_blank" class="btn btn-blue footer-dl-btn">Download App</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 My Recommendation. All Rights Reserved.</p>
    </div>
  </div>
</footer>`;

  document.getElementById('ham').addEventListener('click', function () {
    document.getElementById('mob').classList.toggle('open');
  });
})();
