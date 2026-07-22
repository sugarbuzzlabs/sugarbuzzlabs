import React, { useEffect, useRef, useState } from 'react';

export const CONTACT_EMAIL = 'hello@sugarbuzzlabs.com';

export const LINKS = {
  contact: `mailto:${CONTACT_EMAIL}`,
  support: `mailto:${CONTACT_EMAIL}?subject=Sugarbuzz%20Labs%20support`,
  privacy: '',
  terms: '',
  appStore: {
    dailyset: '',
    stash: '',
    basehitz: '',
  },
};

const ICON_PATHS = {
  bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  trending: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h.01M21 21v-3.5M17.5 21H18"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  wifiOff: '<path d="M12 20h.01M8.5 16.4a5 5 0 0 1 7 0M5 12.9a10 10 0 0 1 3-1.9M2 8.8a16 16 0 0 1 4.5-2.6M19 12.9c.4.3.8.6 1.2 1M22 8.8a16 16 0 0 0-4-2.5M2 2l20 20"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  play: '<path d="m6 4 14 8-14 8V4Z"/>',
  speaker: '<path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>',
  megaphone: '<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrowUR: '<path d="M7 17 17 7M7 7h10v10"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  tag: '<path d="M3 7v5l9 9 6-6-9-9H3Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  skipBack: '<path d="M19 20 9 12l10-8v16ZM5 19V5"/>',
  skipFwd: '<path d="m5 4 10 8-10 8V4ZM19 5v14"/>',
  baseball: '<circle cx="12" cy="12" r="9"/><path d="M5 5c2.5 2 3.5 4.5 3.5 7S7.5 17 5 19M19 5c-2.5 2-3.5 4.5-3.5 7s1 5 3.5 7"/>',
  plusThin: '<path d="M12 5v14M5 12h14"/>',
};

export function Icon({ name, className, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || '' }}
      aria-hidden="true"
    />
  );
}

export function Mark({ className, style }) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={style} fill="none" aria-label="Sugarbuzz">
      <path d="M6 8 L24 8 L20 14 L4 14 Z" fill="currentColor" />
      <path d="M12 18 L28 18 L26 24 L8 24 Z" fill="currentColor" />
      <circle cx="27" cy="6" r="2.4" fill="#F59E0B" />
    </svg>
  );
}

export function Wordmark({ className }) {
  return (
    <span className={`wordmark ${className || ''}`}>
      <span>sugarbuzz</span>
      <span className="labs">labs</span>
    </span>
  );
}

export function Reveal({ children, as = 'div', className = '', delay = 0, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Phone({ src, children, glow = false, pw, style }) {
  const styles = { ...(pw ? { '--pw': pw } : {}), ...style };
  return (
    <div className={glow ? 'phone phone-glow' : 'phone'} style={styles}>
      <div className="screen">{src ? <img src={src} alt="" loading="lazy" /> : children}</div>
    </div>
  );
}

export function BHGameDay() {
  return (
    <div className="bh-screen">
      <div className="bh-statusbar">
        <span>7:42</span>
        <span className="dots">◌ ▦ 91</span>
      </div>
      <div>
        <div className="bh-sub">Game day · Top 3rd</div>
        <div className="bh-title">Now batting</div>
      </div>
      <div className="bh-nowcard">
        <div className="bh-player">
          <div className="bh-jersey">7</div>
          <div>
            <div className="pn">Mateo R.</div>
            <div className="ps">Shortstop · #7</div>
          </div>
        </div>
        <div className="bh-song">
          <div className="art" />
          <div>
            <div className="sn">Enter Sandman</div>
            <div className="sa">from 0:48</div>
          </div>
          <div className="play">
            <Icon name="play" />
          </div>
        </div>
        <div className="bh-transport">
          <Icon name="skipBack" />
          <span style={{ fontSize: 12, color: 'var(--fg-3)' }} className="num">
            3 of 9
          </span>
          <Icon name="skipFwd" />
        </div>
      </div>
      <div className="bh-ondeck">On deck</div>
      <div className="bh-row" style={{ borderTop: 'none', paddingTop: 0 }}>
        <div className="num">9</div>
        <div>
          <div className="rn">Jordan P.</div>
          <div className="rs">Centerfield</div>
        </div>
        <span className="chip">Thunderstruck</span>
      </div>
      <div className="bh-row">
        <div className="num">4</div>
        <div>
          <div className="rn">Eli T.</div>
          <div className="rs">First base</div>
        </div>
        <span className="chip">Seven Nation Army</span>
      </div>
      <div className="bh-tabbar">
        <div className="tab active">
          <Icon name="play" />
          <span>Game Day</span>
        </div>
        <div className="tab">
          <Icon name="users" />
          <span>Roster</span>
        </div>
        <div className="tab">
          <Icon name="speaker" />
          <span>Stadium</span>
        </div>
      </div>
    </div>
  );
}

export function BHRoster() {
  const players = [
    ['7', 'Mateo R.', 'Enter Sandman'],
    ['9', 'Jordan P.', 'Thunderstruck'],
    ['4', 'Eli T.', 'Seven Nation Army'],
    ['12', 'Sam K.', 'Crazy Train'],
    ['3', 'Avery L.', "Can't Stop"],
    ['21', 'Noah B.', 'Eye of the Tiger'],
  ];

  return (
    <div className="bh-screen">
      <div className="bh-statusbar">
        <span>7:42</span>
        <span className="dots">◌ ▦ 91</span>
      </div>
      <div>
        <div className="bh-sub">Wildcats · 12 players</div>
        <div className="bh-title">Roster</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 2 }}>
        {players.map((player, index) => (
          <div className="bh-row" key={player[0]} style={index === 0 ? { borderTop: 'none' } : null}>
            <div className="num">{player[0]}</div>
            <div>
              <div className="rn">{player[1]}</div>
              <div className="rs">Walk-up song</div>
            </div>
            <span className="chip">{player[2]}</span>
          </div>
        ))}
      </div>
      <div className="bh-tabbar">
        <div className="tab">
          <Icon name="play" />
          <span>Game Day</span>
        </div>
        <div className="tab active">
          <Icon name="users" />
          <span>Roster</span>
        </div>
        <div className="tab">
          <Icon name="speaker" />
          <span>Stadium</span>
        </div>
      </div>
    </div>
  );
}

export const APPS = [
  {
    id: 'dailyset',
    scheme: 'theme-voltage',
    name: 'DailySet',
    category: 'Fitness & habits',
    icon: 'bolt',
    status: { live: false, label: 'Coming soon' },
    headline: 'Build the habit, one set at a time.',
    lede: 'A lightweight tracker for everyday movement. Log reps and sets in a tap, watch your streak hold, and let gentle reminders keep you going - no workout plans, no overhead.',
    features: [
      { icon: 'plus', title: 'Tap to log', desc: 'Quick +5, +10, +25 increments for push-ups, squats, stretches - any repeatable exercise.' },
      { icon: 'list', title: 'Today at a glance', desc: 'Every set you log, totaled and timestamped, so the day stays honest.' },
      { icon: 'trending', title: 'Trends & streaks', desc: 'Daily averages, your best day, and active-day counts over the week or month.' },
      { icon: 'bell', title: 'Gentle reminders', desc: 'Schedule nudges for each exercise - weekdays, weekends, or your own cadence.' },
    ],
    screens: [
      { src: '/assets/screens/dailyset-reminders.png' },
      { src: '/assets/screens/dailyset-today.png' },
      { src: '/assets/screens/dailyset-trends.png' },
    ],
  },
  {
    id: 'stash',
    scheme: 'theme-stash',
    name: 'Stash',
    category: 'Home & storage',
    icon: 'box',
    status: { live: false, label: 'Coming soon' },
    headline: 'Know where everything is.',
    lede: 'Label your bins, boxes, and totes with QR codes, list what is inside, and scan to jump straight to a container. A simple, offline answer to "where did I put this?" - no spreadsheets, no accounts.',
    features: [
      { icon: 'qr', title: 'QR labels', desc: 'Print clean label sheets and stick them on any container, box, or toolbox.' },
      { icon: 'scan', title: 'Scan to find', desc: 'Point your camera at a label to open that container instantly.' },
      { icon: 'search', title: 'Everything searchable', desc: 'Find an item by name, tag, or where it lives - basement gym, garage, attic.' },
      { icon: 'wifiOff', title: 'Fully offline', desc: 'Your inventory stays on your phone. No cloud, no sign-in, no subscription.' },
    ],
    screens: [
      { src: '/assets/screens/stash-scan.png' },
      { src: '/assets/screens/stash-containers.png' },
      { src: '/assets/screens/stash-search.png' },
    ],
  },
  {
    id: 'basehitz',
    scheme: 'theme-cobalt',
    name: 'Base Hitz',
    category: 'Youth sports',
    icon: 'baseball',
    status: { live: true, label: 'Now available on iOS' },
    headline: 'Walk-up music for every at-bat.',
    lede: 'Give your players the big-league experience. Base Hitz lets parents and coaches play personalized walk-up songs, inning break music, warm-up tracks, and sound effects - right from your phone.',
    features: [
      { icon: 'music', title: 'Walk-Up Songs', desc: 'Assign a personalized walk-up song to every player. Pick any song from your music library and set the exact start time for maximum hype.' },
      { icon: 'play', title: 'Game Day Mode', desc: 'Follow your batting order in real time. Tap play and the right song fires for the current batter, with On Deck always visible.' },
      { icon: 'speaker', title: 'Stadium Audio', desc: 'Keep the energy up with Warm-Up and Inning Break playlists that auto-stop after a configurable duration.' },
      { icon: 'megaphone', title: 'Soundboard', desc: 'Trigger instant sound effects with one tap. Audio ducking automatically lowers background music when an effect plays.' },
      { icon: 'users', title: 'Team Roster', desc: 'Build full team rosters with player names, jersey numbers, photos, and individual walk-up songs.' },
      { icon: 'list', title: 'Flexible Lineups', desc: 'Create a new lineup for every game. Drag and drop the batting order, and each player song travels with them.' },
    ],
    screens: [
      { src: '/assets/screens/basehitz/screen-roster.png' },
      { src: '/assets/screens/basehitz/screen-gameday-batting.png' },
      { src: '/assets/screens/basehitz/screen-stadium.png' },
    ],
    galleryScreens: [
      { src: '/assets/screens/basehitz/screen-gameday-batting.png' },
      { src: '/assets/screens/basehitz/screen-roster.png' },
      { src: '/assets/screens/basehitz/screen-lineup-order.png' },
      { src: '/assets/screens/basehitz/screen-gameday-1.png' },
      { src: '/assets/screens/basehitz/screen-stadium.png' },
      { src: '/assets/screens/basehitz/screen-edit-player.png' },
      { src: '/assets/screens/basehitz/screen-gameday-select.png' },
      { src: '/assets/screens/basehitz/screen-settings.png' },
      { src: '/assets/screens/basehitz/screen-gameday-2.png' },
    ],
  },
];

export const FAQS = [
  { q: 'When do the apps launch?', a: 'DailySet and Stash are in final testing and arrive on the App Store soon. Join the waitlist and we will email you the day they go live. Base Hitz is available on iOS right now.' },
  { q: 'How much do they cost?', a: 'Base Hitz is free. DailySet and Stash will carry a simple one-time price at launch - buy once, keep it. No subscriptions, ever.' },
  { q: 'Do they work offline?', a: 'Yes. All three keep your data on your device. DailySet and Stash need no account at all; Base Hitz works with your existing Apple Music library.' },
  { q: 'What devices are supported?', a: 'iPhone, on a recent version of iOS. Each app is built natively for a fast, native feel - no web wrappers.' },
  { q: 'Who makes these?', a: 'Sugarbuzz Labs, an independent studio. Every app here started as something we built for ourselves, then sharpened until it was worth sharing.' },
  { q: 'Will there be more apps?', a: 'Yes - small, focused tools, released when they are ready. The waitlist is the best way to hear about the next one first.' },
];

export const PRICING = [
  { name: 'DailySet', cat: 'Fitness & habits', amt: 'One-time', note: 'A simple purchase at launch. No subscription, no in-app upsells.', cta: 'Coming soon', live: false },
  { name: 'Base Hitz', cat: 'Youth sports', amt: 'Free', note: 'Free to download on the App Store. Works with your existing Apple Music library.', cta: 'Available on iOS', live: true, featured: true },
  { name: 'Stash', cat: 'Home & storage', amt: 'One-time', note: 'Buy once and organize everything. Your data never leaves your phone.', cta: 'Coming soon', live: false },
];

export const WEB_PROJECTS = [
  {
    id: 'contractor',
    category: 'Contractor Services',
    headline: 'Authority redesign for a regional contractor.',
    desc: 'Multi-page site with service area coverage, trust signals, animated proof stats, and an online estimate request form. Replaced a static brochure with a lead-generating machine.',
    tags: ['React', 'Tailwind', 'Mobile-first', 'POC'],
    img: '/assets/web/contractor-redesign_fc60e496.png',
  },
  {
    id: 'specialty',
    category: 'Specialty Retail',
    headline: 'Dark luxury redesign for a specialty retailer.',
    desc: 'Full-service site with service catalog, online quote request, testimonials, and a mobile-optimized contact flow. Took a dated template and replaced it with a brand that matches the premium product.',
    tags: ['React', 'Tailwind', 'Dark theme', 'POC'],
    img: '/assets/web/specialty-retail-redesign_9bf37286.png',
  },
  {
    id: 'lifestyle',
    category: 'Lifestyle Retail',
    headline: 'Warm aspirational redesign for a showroom retailer.',
    desc: 'Six-page lifestyle site with product catalog, project gallery, service pages, and a backyard design consultation CTA — all missing from the original. Built to convert high-consideration buyers before they walk in.',
    tags: ['React', 'Tailwind', 'Lifestyle', 'POC'],
    img: '/assets/web/lifestyle-retail-redesign_549bbd44.png',
  },
];
