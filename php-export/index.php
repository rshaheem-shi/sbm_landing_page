<?php
// ── Email handler ─────────────────────────────────────────
$mail_sent = false;
$mail_error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['form_submit'])) {
    $to      = 'rshaheem311@gmail.com';
    $name    = strip_tags(trim($_POST['name'] ?? ''));
    $phone   = strip_tags(trim($_POST['phone'] ?? ''));
    $email   = strip_tags(trim($_POST['email'] ?? ''));
    $company = strip_tags(trim($_POST['company'] ?? '—'));
    $message = strip_tags(trim($_POST['message'] ?? '—'));

    if ($name && $phone && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $subject = "SBM-Pranav Investment Inquiry — $name";
        $body  = "New investor inquiry from the SBM-Pranav landing page:\n\n";
        $body .= "Name: $name\n";
        $body .= "Phone: $phone\n";
        $body .= "Email: $email\n";
        $body .= "Company: $company\n\n";
        $body .= "Message:\n$message";
        $headers = "From: noreply@sbm-pranav.com\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();
        $mail_sent = mail($to, $subject, $body, $headers);
        if (!$mail_sent) $mail_error = 'Could not send email. Please try WhatsApp or call us directly.';
    } else {
        $mail_error = 'Please fill all required fields with valid details.';
    }
}

$wa_link = 'https://wa.me/918940089888?text=' . urlencode('Hello, I am interested in knowing more about the property you posted. Could you please share the property details.');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SBM Pranav — Premium Commercial Infrastructure Investment</title>
  <meta name="description" content="2.5 Acre commercial land near Tuticorin Airport, Harbour and National Highway. 400ft frontage. A ₹10Cr+ investment opportunity." />
  <link rel="stylesheet" href="style.css" />
  <!-- Icons (inline SVG used throughout) -->
</head>
<body>

<!-- ══ NAV ════════════════════════════════════════════════ -->
<nav id="navbar">
  <div class="container nav-inner">
    <img src="assets/logo.png" alt="SBM Pranav Property Developers" class="nav-logo" onclick="window.scrollTo({top:0,behavior:'smooth'})" />
    <div class="nav-links">
      <a href="javascript:void(0)" onclick="scrollTo('location')">Location</a>
      <a href="javascript:void(0)" onclick="scrollTo('usecases')">Opportunities</a>
      <a href="javascript:void(0)" onclick="scrollTo('investment')">Investment</a>
      <a href="javascript:void(0)" onclick="scrollTo('gallery')">Gallery</a>
      <button class="btn-nav" onclick="scrollTo('contact')">Schedule Visit</button>
    </div>
    <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div id="mobile-menu">
  <a href="javascript:void(0)" onclick="scrollTo('location')">Location Advantage</a>
  <a href="javascript:void(0)" onclick="scrollTo('usecases')">Commercial Use Cases</a>
  <a href="javascript:void(0)" onclick="scrollTo('investment')">Investment Potential</a>
  <a href="javascript:void(0)" onclick="scrollTo('gallery')">Site Gallery</a>
  <a class="btn-mobile-cta" href="javascript:void(0)" onclick="scrollTo('contact')">Schedule Site Visit</a>
</div>

<!-- ══ HERO ═══════════════════════════════════════════════ -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-overlay-side"></div>

  <div class="container">
    <div class="hero-content">
      <div class="hero-eyebrow">
        <div class="line"></div>
        <span>Prime Commercial Asset &middot; Tuticorin</span>
      </div>

      <h1 class="hero-h1">
        Premium Commercial Infrastructure
        <span class="accent">Investment Opportunity</span>
      </h1>

      <p class="hero-sub">
        Strategically positioned near Tuticorin Airport, Harbour Connectivity &amp; National Highway Access.
        A &#8377;10Cr+ asset built for exponential appreciation.
      </p>

      <div class="hero-pills">
        <?php
        $pills = [
          ['2.5 Acre Land',       'M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h4M15 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M9 4v16'],
          ['400 Ft Frontage',     'M3 12h18M12 3l9 9-9 9'],
          ['1–2 KM Airport',      'M12 19l9 2-9-18-9 18 9-2zm0 0v-8'],
          ['20 KM Harbour',       'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'],
          ['Vagaikulam Toll',     'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a2 2 0 110-4 2 2 0 010 4z'],
          ['High Appreciation',  'M23 6l-9.5 9.5-5-5L1 18'],
        ];
        foreach ($pills as $p): ?>
        <div class="pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="<?= $p[1] ?>"/>
          </svg>
          <span><?= $p[0] ?></span>
        </div>
        <?php endforeach; ?>
      </div>

      <div class="hero-ctas">
        <button class="btn-primary" onclick="scrollTo('contact')">
          Schedule Site Visit
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <a class="btn-outline" href="<?= htmlspecialchars($wa_link) ?>" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          WhatsApp
        </a>
        <button class="btn-ghost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Brochure
        </button>
      </div>
    </div>
  </div>

  <div class="hero-scroll" onclick="scrollTo('location')">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9l6 6 6-6"/></svg>
  </div>
</section>

<!-- ══ SECTION 2 — LOCATION ═══════════════════════════════ -->
<section id="location" class="section section-alt">
  <div class="container">
    <div class="text-center reveal">
      <div class="section-eyebrow"><div class="line"></div><span>Connectivity</span><div class="line"></div></div>
      <h2 class="section-title">Unmatched Location Advantage</h2>
      <div class="gold-bar"></div>
      <p class="section-sub">The true value of commercial land is dictated by its connectivity. SBM-Pranav sits at the exact intersection of air, sea, and land transit routes.</p>
    </div>

    <div style="height:36px"></div>

    <div class="location-grid">
      <?php
      $loc_cards = [
        ['Airport Connectivity', '1–2 KM from Tuticorin Airport. Fast access for corporate travel, logistics, and business expansion.', 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8'],
        ['Harbour Connectivity', '20 KM from Harbour. Ideal for import/export, industrial operations, and supply chain businesses.',  'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'],
        ['Highway Frontage',     '400 ft road-facing visibility. Prime commercial accessibility on National Highway.',                  'M1 6l11 12 11-12'],
        ['Toll Plaza Proximity', 'Adjacent to Vagaikulam Toll. Perfect for logistics hubs, fleet movement, and transit businesses.',   'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a2 2 0 110-4 2 2 0 010 4z'],
      ];
      foreach ($loc_cards as $i => $c): ?>
      <div class="location-card reveal reveal-delay-<?= $i+1 ?>">
        <div class="location-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="<?= $c[2] ?>"/>
          </svg>
        </div>
        <h3><?= $c[0] ?></h3>
        <p><?= $c[1] ?></p>
      </div>
      <?php endforeach; ?>
    </div>

    <!-- Animated Map -->
    <div style="height:36px"></div>
    <div class="map-visual reveal">
      <div class="map-grid"></div>
      <svg class="map-svg" viewBox="0 0 1000 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="map-path" d="M 200 140 Q 380 60 500 140 T 800 100"
          fill="transparent" stroke="#C9A227" stroke-width="2" stroke-dasharray="8,5"/>
        <path class="map-path map-path-2" d="M 500 140 Q 630 230 800 200"
          fill="transparent" stroke="#C9A227" stroke-width="2" stroke-dasharray="8,5"/>
      </svg>
      <!-- Nodes -->
      <div class="map-node" style="left:20%;top:50%">
        <div class="map-dot"></div>
        <div class="map-label">Airport</div>
      </div>
      <div class="map-node" style="left:50%;top:50%;z-index:2">
        <div class="map-site-box"><div class="map-site-inner"></div></div>
        <div class="map-label">SBM PRANAV SITE</div>
      </div>
      <div class="map-node" style="left:80%;top:36%">
        <div class="map-dot-sm"></div>
        <div class="map-label map-label-muted">Harbour 20km</div>
      </div>
      <div class="map-node" style="left:80%;top:72%">
        <div class="map-dot-sm" style="border-color:#731C1C;background:rgba(115,28,28,.15)"></div>
        <div class="map-label map-label-muted">Vagaikulam Toll</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ SECTION 3 — USE CASES ══════════════════════════════ -->
<section id="usecases" class="section section-bordered">
  <div class="container">
    <div class="section-head-flex reveal">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <div style="width:28px;height:1px;background:var(--gold)"></div>
          <span style="font-size:11px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:.15em">Endless Potential</span>
        </div>
        <h2 class="section-title">Ideal For High-Return Commercial Ventures</h2>
      </div>
      <p class="sub-right">Zoned and positioned for massive infrastructural developments.</p>
    </div>

    <div class="usecase-grid">
      <?php
      $usecases = [
        ['Logistics Park',      'Port-to-airport transit routes',        'M1 6l11 12 11-12'],
        ['Warehouse Hub',       '2.5 acre storage facilities',           'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'],
        ['Business Hotel',      'Airport corporate transit',             'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10'],
        ['Commercial Complex',  '400ft highway frontage visibility',     'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8 4 4 0 000-8z'],
        ['Industrial Yard',     'Heavy machinery &amp; export staging', 'M2 20h20M6 20V8l6-4 6 4v12'],
        ['EV Charging Hub',     'Highway fleet charging',                'M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
        ['Corporate Office',    'Headquarters for maritime firms',       'M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'],
      ];
      foreach ($usecases as $i => $u): ?>
      <div class="usecase-card reveal reveal-delay-<?= min($i+1,4) ?>">
        <div class="usecase-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="<?= $u[2] ?>"/>
          </svg>
        </div>
        <h3><?= $u[0] ?></h3>
        <p><?= $u[1] ?></p>
      </div>
      <?php endforeach; ?>
      <div class="usecase-cta reveal" onclick="scrollTo('contact')">
        <h3>Custom requirement?</h3>
        <p>Discuss zoning and build potential.</p>
        <a href="javascript:void(0)">Consult Now &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- ══ SECTION 4 — INVESTMENT ═════════════════════════════ -->
<section id="investment" class="section section-alt">
  <div class="container">
    <div class="investment-grid">
      <div class="investment-left reveal">
        <div class="eyebrow"><div class="line"></div><span>Investment Case</span></div>
        <h2>Built for Long-Term Commercial Appreciation</h2>
        <p>Land in this corridor has seen unprecedented value growth. The convergence of national highways, a major port, and an expanding airport creates a scarcity of prime large-acreage plots.</p>
        <div class="invest-points">
          <?php
          $points = [
            'Airport-driven commercial demand growth',
            'Harbour expansion &amp; import/export logistics surge',
            'High-visibility National Highway frontage',
            'Emerging industrial &amp; tech corridor',
            'Future-proof infrastructure connectivity',
          ];
          foreach ($points as $pt): ?>
          <div class="invest-point">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3"/>
            </svg>
            <span><?= $pt ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <div class="reveal reveal-delay-2">
        <div class="stat-cards">
          <div class="stat-card">
            <span class="num counter" data-target="400" data-duration="2">0</span>
            <div class="lbl">FT Frontage</div>
          </div>
          <div class="stat-card">
            <span class="num counter" data-target="20" data-duration="2">0</span>
            <div class="lbl">KM to Port</div>
          </div>
          <div class="stat-card">
            <span class="num counter" data-target="2.5" data-duration="1.5">0</span>
            <div class="lbl">Acres</div>
          </div>
        </div>

        <div class="chart-box">
          <div class="chart-header">
            <h4>Land Appreciation Trend</h4>
            <span>Projected Model</span>
          </div>
          <div class="chart-bars" id="chart-bars"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ SECTION 5 — INVESTORS ══════════════════════════════ -->
<section id="investors" class="section section-bordered">
  <div class="container">
    <div class="text-center reveal" style="margin-bottom:32px">
      <h2 class="section-title">Who This Is Built For</h2>
      <p class="section-sub">Strategic buyers seeking high-leverage positions in Tamil Nadu's industrial growth corridor.</p>
    </div>
    <div class="investor-grid">
      <?php
      $investors = [
        ['Industrial Investors', 'Large footprint for heavy setup.',         'M2 20h20M6 20V8l6-4 6 4v12'],
        ['Logistics Companies',  'Highway and port proximity.',              'M1 6l11 12 11-12'],
        ['Corporate Developers', 'Grade-A office or retail.',               'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'],
        ['NRIs',                 'High-appreciation Indian assets.',         'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'],
        ['Commercial Builders',  'Hospitality &amp; transit infrastructure.','M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10'],
        ['Supply Chain Firms',   'Staging areas near the harbour.',         'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'],
      ];
      foreach ($investors as $i => $inv): ?>
      <div class="investor-card reveal reveal-delay-<?= min($i+1,4) ?>">
        <div class="investor-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="<?= $inv[2] ?>"/>
          </svg>
        </div>
        <h4><?= $inv[0] ?></h4>
        <p><?= $inv[1] ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ══ SECTION 6 — WHY SBM ════════════════════════════════ -->
<section id="why" class="section section-alt">
  <div class="container">
    <div class="text-center reveal" style="margin-bottom:40px">
      <h2 class="section-title">Why SBM-Pranav Stands Apart</h2>
      <div class="gold-bar"></div>
    </div>
    <div class="why-grid">
      <?php
      $why = [
        ['Strategic Location',       'Dead center between the airport, harbour, and major toll plazas.',         'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a2 2 0 110-4 2 2 0 010 4z'],
        ['High Visibility Frontage', '400ft directly facing the National Highway for unmatched brand exposure.', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'],
        ['Future Growth Corridor',   'Positioned in a government-backed industrial expansion zone.',             'M23 6l-9.5 9.5-5-5L1 18'],
        ['Commercial Scalability',   '2.5 contiguous acres allows for massive, multi-phase developments.',       'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
        ['Infrastructure Connectivity','Instant access to power grids, heavy transit roads, and utilities.',    'M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
        ['Long-Term Value',          'A generational asset with clear title and zero encumbrances.',             'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
      ];
      foreach ($why as $i => $w): ?>
      <div class="why-item reveal reveal-delay-<?= min($i+1,4) ?>">
        <div class="why-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="<?= $w[2] ?>"/>
          </svg>
        </div>
        <div>
          <h4><?= $w[0] ?></h4>
          <p><?= $w[1] ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ══ SECTION 7 — GALLERY ════════════════════════════════ -->
<section id="gallery" class="section">
  <div class="container">
    <div class="gallery-header reveal">
      <h2>See The Site</h2>
      <div class="gold-bar" style="margin:8px 0 12px"></div>
      <p>Premium commercial infrastructure set against the backdrop of rapid regional development.</p>
    </div>
  </div>
  <div style="padding:0 4px">
    <div class="gallery-grid">
      <div class="gallery-item tall reveal">
        <img src="assets/hero.jpg" alt="Site Overview" loading="lazy" />
        <div class="gallery-overlay"></div>
        <div class="gallery-label">SITE OVERVIEW</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px">
        <div class="gallery-item reveal reveal-delay-1">
          <img src="assets/gallery-2.png" alt="Highway Access" loading="lazy" />
          <div class="gallery-overlay"></div>
          <div class="gallery-label">HIGHWAY ACCESS</div>
        </div>
        <div class="gallery-item reveal reveal-delay-2">
          <img src="assets/gallery-3.png" alt="Harbour Proximity" loading="lazy" />
          <div class="gallery-overlay"></div>
          <div class="gallery-label">HARBOUR PROXIMITY</div>
        </div>
      </div>
    </div>
    <div style="height:4px"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:0 4px">
      <div class="gallery-item reveal reveal-delay-1">
        <img src="assets/gallery-4.png" alt="Development Site" loading="lazy" />
        <div class="gallery-overlay"></div>
        <div class="gallery-label">DEVELOPMENT SITE</div>
      </div>
      <div class="gallery-item reveal reveal-delay-2">
        <img src="assets/gallery-1.png" alt="Aerial Perspective" loading="lazy" />
        <div class="gallery-overlay"></div>
        <div class="gallery-label">AERIAL PERSPECTIVE</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ SECTION 8 — CONTACT ════════════════════════════════ -->
<section id="contact" class="section section-alt">
  <div class="container">
    <div class="contact-grid">
      <div class="reveal">
        <div class="contact-left">
          <div class="badge"><div class="dot"></div> Limited Opportunity</div>
          <h2>Request Your Investor Consultation</h2>
          <p>Discuss acquisition, zoning details, and regional development plans directly with our executive team.</p>
          <div class="contact-detail">
            <div class="contact-detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
            </div>
            <div>
              <div class="contact-detail-lbl">Direct Line</div>
              <div class="contact-detail-val">+91 89400 89888</div>
            </div>
          </div>
          <div class="contact-detail">
            <div class="contact-detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div class="contact-detail-lbl">Email Inquiries</div>
              <div class="contact-detail-val">rshaheem311@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div class="reveal reveal-delay-2">
        <div class="form-box">
          <?php if ($mail_sent): ?>
          <div class="msg-success" style="display:block">
            Thank you! Your inquiry has been sent. We will contact you within 24 hours.
          </div>
          <?php elseif ($mail_error): ?>
          <div class="msg-error" style="display:block"><?= htmlspecialchars($mail_error) ?></div>
          <?php endif; ?>
          <div id="form-success" class="msg-success">Opening your email client — just hit Send!</div>

          <form id="contact-form" method="POST" action="#contact">
            <input type="hidden" name="form_submit" value="1" />
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input class="form-input" type="text" name="name" placeholder="John Doe" required value="<?= htmlspecialchars($_POST['name'] ?? '') ?>" />
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <input class="form-input" type="tel" name="phone" placeholder="+91" required value="<?= htmlspecialchars($_POST['phone'] ?? '') ?>" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input class="form-input" type="email" name="email" placeholder="john@company.com" required value="<?= htmlspecialchars($_POST['email'] ?? '') ?>" />
              </div>
              <div class="form-group">
                <label class="form-label">Company (Optional)</label>
                <input class="form-input" type="text" name="company" placeholder="Acme Corp" value="<?= htmlspecialchars($_POST['company'] ?? '') ?>" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Additional Details</label>
              <textarea class="form-textarea" name="message" placeholder="Tell us about your requirements..."><?= htmlspecialchars($_POST['message'] ?? '') ?></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn-submit">Request Consultation</button>
              <a class="btn-whatsapp" href="<?= htmlspecialchars($wa_link) ?>" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══════════════════════════════════════════════ -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="assets/logo.png" alt="SBM Pranav" class="footer-logo" />
        <p class="footer-tagline">Future-ready commercial infrastructure at the intersection of airport, harbour, and highway growth.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="javascript:void(0)" onclick="scrollTo('location')">Location Advantage</a></li>
          <li><a href="javascript:void(0)" onclick="scrollTo('usecases')">Commercial Uses</a></li>
          <li><a href="javascript:void(0)" onclick="scrollTo('investment')">Investment Thesis</a></li>
          <li><a href="javascript:void(0)" onclick="scrollTo('gallery')">Site Gallery</a></li>
          <li><a href="javascript:void(0)" onclick="scrollTo('contact')">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a2 2 0 110-4 2 2 0 010 4z"/></svg>
          <span>Tuticorin Airport Road, Vagaikulam Toll Plaza, Tamil Nadu, India</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
          <span>+91 89400 89888</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>rshaheem311@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>This page is for informational purposes only. All details subject to verification.</p>
      <p>&copy; <?= date('Y') ?> SBM Pranav Property Developers. All rights reserved.</p>
    </div>
  </div>
</footer>

<!-- ══ FLOATING WHATSAPP ═══════════════════════════════════ -->
<a class="wa-float" href="<?= htmlspecialchars($wa_link) ?>" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
</a>

<!-- Mobile sticky CTA (hidden by default, shown on scroll via JS) -->
<div class="sticky-cta" id="sticky-cta" style="display:none">
  <button class="btn-submit" onclick="scrollTo('contact')">Schedule Your Site Visit &rarr;</button>
</div>

<script src="script.js"></script>
</body>
</html>
