import React, { useEffect, useState } from 'react';
import {
  APPS,
  BHGameDay,
  BHRoster,
  FAQS,
  Icon,
  LINKS,
  Mark,
  Phone,
  PRICING,
  Reveal,
  Wordmark,
} from '../data/siteData.jsx';

export function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function AppleGlyph({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.6 13c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8Z" />
      <path d="M15.3 6.1c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

function AppStoreBadge({ appId = 'basehitz', live, large }) {
  const href = LINKS.appStore[appId];
  const className = `appstore-badge${live ? '' : ' soft'}${href ? '' : ' disabled'}`;
  const content = (
    <>
      <AppleGlyph size={26} />
      <span className="as-txt">
        <small>{live ? 'Download on the' : 'Coming soon to the'}</small>
        <b>App Store</b>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        className={className}
        style={large ? { height: 56 } : null}
        aria-label={live ? 'App Store link coming soon' : 'Coming soon to the App Store'}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={href}
      style={large ? { height: 56 } : null}
      aria-label={live ? 'Download on the App Store' : 'Coming soon to the App Store'}
    >
      {content}
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a
          className="brand"
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Mark className="mark" />
          <Wordmark />
        </a>
        <nav className="nav">
          <a href="#apps" onClick={(event) => { event.preventDefault(); goTo('apps'); }}>Apps</a>
          <a href="#pricing" onClick={(event) => { event.preventDefault(); goTo('pricing'); }}>Pricing</a>
          <a href="#about" onClick={(event) => { event.preventDefault(); goTo('about'); }}>Studio</a>
          <a href="#faq" onClick={(event) => { event.preventDefault(); goTo('faq'); }}>FAQ</a>
        </nav>
        <div className="header-cta">
          <a className="btn btn-ghost btn-sm" href="#apps" onClick={(event) => { event.preventDefault(); goTo('apps'); }}>See the apps</a>
          <a className="btn btn-primary btn-sm" href="#waitlist" onClick={(event) => { event.preventDefault(); goTo('waitlist'); }}>Get notified</a>
        </div>
      </div>
    </header>
  );
}

const HERO_INDEX = { dailyset: 1, stash: 0, basehitz: 1 };

function HeroPhone({ app, dark, glow, pw }) {
  const index = HERO_INDEX[app.id] ?? 0;
  const screen = app.screens[index];
  return (
    <div className={`${app.scheme}${dark ? ' dark' : ''}`}>
      <Phone glow={glow} pw={pw}>
        {screen.src ? <img src={screen.src} alt={app.name} loading="lazy" /> : screen.node === 'gameday' ? <BHGameDay /> : <BHRoster />}
      </Phone>
    </div>
  );
}

const HERO_EYEBROW = 'Sugarbuzz Labs';
const HERO_TITLE = 'Small, sharp apps for your iPhone.';
const HERO_LEDE = 'An independent studio making focused tools - DailySet, Stash, and Base Hitz. Each does one useful thing, keeps your data on your phone, and stays out of your way.';

function HeroActions() {
  return (
    <div className="hero-actions">
      <a className="btn btn-primary" href="#waitlist" onClick={(event) => { event.preventDefault(); goTo('waitlist'); }}>
        Join the waitlist <Icon name="arrowUR" />
      </a>
      <a className="btn btn-ghost" href="#apps" onClick={(event) => { event.preventDefault(); goTo('apps'); }}>
        Explore the apps
      </a>
    </div>
  );
}

function HeroMeta() {
  return (
    <div className="hero-meta">
      <span>Three apps</span>
      <span className="sep" />
      <span>Built natively for iOS</span>
      <span className="sep" />
      <span>No subscriptions</span>
    </div>
  );
}

export function Hero({ dark }) {
  const ordered = [APPS[0], APPS[2], APPS[1]];

  return (
    <section className="hero hero-statement" id="top">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow hero-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" />
            {HERO_EYEBROW}
          </p>
          <h1 className="display" style={{ maxWidth: 900, marginInline: 'auto' }}>{HERO_TITLE}</h1>
          <p className="lede" style={{ maxWidth: 560 }}>{HERO_LEDE}</p>
          <HeroActions />
          <HeroMeta />
        </Reveal>
        <Reveal delay={160}>
          <div className="phone-fan">
            {ordered.map((app, index) => (
              <div className="fan-item" key={app.id}>
                <HeroPhone app={app} dark={dark} glow={index === 1} pw={index === 1 ? '256px' : '224px'} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniScreen({ app, dark }) {
  const screen = app.screens[0];
  if (screen.src) return <img src={screen.src} alt={app.name} loading="lazy" />;
  return (
    <div className={`${app.scheme}${dark ? ' dark' : ''}`} style={{ aspectRatio: '1320 / 2868', width: '100%' }}>
      {screen.node === 'gameday' ? <BHGameDay /> : <BHRoster />}
    </div>
  );
}

function AppScreens({ app }) {
  return (
    <div className={`app-shots${app.screens.length === 1 ? ' single' : ''}`}>
      {app.screens.map((screen, index) => (
        <Phone key={`${app.id}-${index}`} glow={index === Math.floor(app.screens.length / 2) && app.screens.length > 1} pw={app.screens.length > 2 ? '218px' : '236px'}>
          {screen.src ? <img src={screen.src} alt={`${app.name} screen`} loading="lazy" /> : screen.node === 'gameday' ? <BHGameDay /> : <BHRoster />}
        </Phone>
      ))}
    </div>
  );
}

export function AppSection({ app, index, dark }) {
  const className = `app-section section ${index % 2 ? 'reverse' : ''} ${app.scheme}${dark ? ' dark' : ''}`;
  return (
    <section id={app.id} className={className} style={{ background: 'var(--bg-paper)' }} data-screen-label={app.name}>
      <div className="wrap">
        <div className="app-grid">
          <Reveal className="app-copy">
            <div className="app-head">
              <div className="app-icon"><Icon name={app.icon} /></div>
              <div>
                <div className="ah-cat">{app.category}</div>
                <div className="ah-name">{app.name}</div>
              </div>
            </div>
            <div className={`app-status${app.status.live ? ' live' : ''}`}>
              <span className="pip" />
              {app.status.label}
            </div>
            <h2 className="h2">{app.headline}</h2>
            <p className="lede">{app.lede}</p>
            <ul className="feature-list">
              {app.features.map((feature) => (
                <li key={feature.title}>
                  <span className="feature-ic"><Icon name={feature.icon} /></span>
                  <span>
                    <span className="ft-title">{feature.title}</span>
                    <span className="ft-desc" style={{ display: 'block' }}>{feature.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            {app.status.live ? (
              <AppStoreBadge appId={app.id} live />
            ) : (
              <a className="btn btn-primary" href="#waitlist" onClick={(event) => { event.preventDefault(); goTo('waitlist'); }}>
                Get notified at launch <Icon name="arrowUR" />
              </a>
            )}
          </Reveal>
          <Reveal delay={120}>
            <AppScreens app={app} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Gallery({ dark }) {
  const shots = [];
  APPS.forEach((app) => app.screens.forEach((screen, index) => shots.push({ app, screen, index })));

  return (
    <section className="section-tight" style={{ background: 'var(--bg-paper-2)', borderBlock: '1px solid var(--border)' }}>
      <div className="wrap">
        <Reveal className="sec-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" />
            The screens
          </p>
          <h2 className="h2">Built clean, dark, and fast.</h2>
          <p className="lede">Every screen is designed to be glanced at and gotten out of - readable in bright sunlight, quick to navigate one-handed.</p>
        </Reveal>
      </div>
      <Reveal delay={100}>
        <div className="gallery-rail wrap" style={{ maxWidth: 'none', display: 'flex' }}>
          {shots.map((shot) => (
            <div className="g-item" key={`${shot.app.id}-${shot.index}`}>
              <div className={`${shot.app.scheme}${dark ? ' dark' : ''}`}>
                <Phone>
                  {shot.screen.src ? <img src={shot.screen.src} alt={shot.app.name} loading="lazy" /> : shot.screen.node === 'gameday' ? <BHGameDay /> : <BHRoster />}
                </Phone>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <div className="gallery-cap">
        <b>DailySet</b> · <b>Stash</b> · <b>Base Hitz</b> - drag to explore
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <Reveal className="sec-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" />
            Pricing
          </p>
          <h2 className="h2">Simple pricing. No subscriptions.</h2>
          <p className="lede">Pay once where there's a price, or nothing where there isn't. No monthly fees, no upsells, no ads - just the app.</p>
        </Reveal>
        <div className="price-grid">
          {PRICING.map((price, index) => (
            <Reveal key={price.name} delay={index * 90} style={{ display: 'flex' }}>
              <div className="price-card" style={{ flex: 1, borderColor: price.featured ? 'color-mix(in oklab, var(--buzz) 45%, transparent)' : undefined }}>
                <div className="pc-name">{price.name}</div>
                <div className="pc-cat">{price.cat}</div>
                <div className="pc-amt">{price.amt === 'Free' ? 'Free' : <>{price.amt} <small>at launch</small></>}</div>
                <div className="pc-note">{price.note}</div>
                {price.live ? (
                  <span className="btn btn-primary btn-disabled" aria-disabled="true">{price.cta}</span>
                ) : (
                  <a className="btn btn-soft" href="#waitlist" onClick={(event) => { event.preventDefault(); goTo('waitlist'); }}>{price.cta}</a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Studio() {
  const principles = [
    { icon: 'target', t: 'One job, done well', d: 'Every app solves a single, real problem - then stops. No feature bloat, no dashboards you never asked for.' },
    { icon: 'lock', t: 'Yours, and offline', d: 'Your data lives on your device. No accounts to create, nothing synced to a server you have to trust.' },
    { icon: 'tag', t: 'Buy once, keep it', d: 'A fair one-time price or free. We would rather make something worth owning than rent it back to you.' },
  ];

  return (
    <section className="section" id="about" style={{ background: 'var(--bg-paper-2)', borderBlock: '1px solid var(--border)' }}>
      <div className="wrap">
        <div className="studio-grid">
          <Reveal>
            <p className="eyebrow"><span className="dot" />The studio</p>
            <h2 className="h2" style={{ marginTop: 16, marginBottom: 20 }}>Made by Sugarbuzz Labs.</h2>
            <p className="lede" style={{ marginBottom: 16 }}>
              Sugarbuzz Labs is a one-person studio building small, native iPhone apps. Each one started as something I needed myself - a way to keep up a daily habit, find what's in the garage, or give my kid a walk-up song - and got refined until it felt worth handing to other people.
            </p>
            <p className="lede">
              The thread across all three: do the useful thing, respect your attention, and never get in the way. That's the whole brief.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="principles">
              {principles.map((principle) => (
                <div className="principle" key={principle.t}>
                  <span className="pr-ic"><Icon name={principle.icon} /></span>
                  <span>
                    <div className="pr-t">{principle.t}</div>
                    <div className="pr-d">{principle.d}</div>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [picks, setPicks] = useState({ dailyset: true, stash: true, basehitz: false });
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');

  function toggle(id) {
    setPicks((current) => ({ ...current, [id]: !current[id] }));
  }

  async function submit(event) {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!ok) {
      setState('error');
      setMessage('Enter a valid email address.');
      return;
    }

    const chosen = Object.keys(picks).filter((key) => picks[key]);
    const payload = new URLSearchParams();
    payload.set('form-name', 'sugarbuzz-waitlist');
    payload.set('bot-field', '');
    payload.set('email', trimmedEmail);
    payload.set('apps', chosen.join(', '));

    setState('submitting');
    setMessage('');

    try {
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (!response.ok) throw new Error(`Netlify form submission failed: ${response.status}`);
      setState('success');
      setMessage(`We'll email ${trimmedEmail} at launch. Thanks for the interest.`);
    } catch (error) {
      setState('error');
      setMessage('The form could not submit just now. Please try again or email us directly.');
    }
  }

  return (
    <section className="section" id="waitlist">
      <div className="wrap-narrow">
        <Reveal>
          <div className="waitlist-card">
            <p className="eyebrow"><span className="dot" />Get notified</p>
            <h2 className="h2" style={{ marginTop: 16, marginBottom: 14 }}>Be first when they launch.</h2>
            <p className="lede" style={{ maxWidth: 520 }}>
              Drop your email and we'll send one message - no more - the day DailySet and Stash hit the App Store. Base Hitz is already there.
            </p>

            {state === 'success' ? (
              <div className="wl-success">
                <span className="ck-circle"><Icon name="check" /></span>
                <span>
                  <div className="wl-s-t">You're on the list.</div>
                  <div className="wl-s-d">{message}</div>
                </span>
              </div>
            ) : (
              <form
                name="sugarbuzz-waitlist"
                method="POST"
                action="/forms.html"
                netlify="true"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={submit}
              >
                <input type="hidden" name="form-name" value="sugarbuzz-waitlist" />
                <p hidden>
                  <label>
                    Do not fill this out:
                    <input name="bot-field" tabIndex="-1" autoComplete="off" />
                  </label>
                </p>
                <input type="hidden" name="apps" value={Object.keys(picks).filter((key) => picks[key]).join(', ')} />
                <div className="wl-form">
                  <input
                    className="wl-input"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-label="Email address"
                    disabled={state === 'submitting'}
                  />
                  <button className="btn btn-primary" type="submit" disabled={state === 'submitting'}>
                    {state === 'submitting' ? 'Sending...' : 'Notify me'}
                  </button>
                </div>
                <div className="wl-chips" role="group" aria-label="Which apps?">
                  {APPS.map((app) => (
                    <button
                      type="button"
                      key={app.id}
                      className="wl-chip"
                      aria-pressed={picks[app.id]}
                      onClick={() => toggle(app.id)}
                      disabled={state === 'submitting'}
                    >
                      <Icon name="check" className="ck" />
                      {app.name}
                    </button>
                  ))}
                </div>
                {state === 'error' ? (
                  <div className="wl-note" style={{ color: 'var(--danger)' }}>{message}</div>
                ) : (
                  <div className="wl-note">Tell us which apps you're waiting for. No spam, ever - unsubscribe in one tap.</div>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq" style={{ background: 'var(--bg-paper-2)', borderTop: '1px solid var(--border)' }}>
      <div className="wrap-narrow">
        <Reveal className="sec-head">
          <p className="eyebrow"><span className="dot" />Questions</p>
          <h2 className="h2">Good to know.</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="faq-list">
            {FAQS.map((item, index) => (
              <div className={`faq-item${open === index ? ' open' : ''}`} key={item.q}>
                <button className="faq-q" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                  {item.q}
                  <Icon name="plusThin" className="chev" />
                </button>
                <div className="faq-a" style={{ maxHeight: open === index ? 320 : 0 }}>
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FooterLink({ href, children }) {
  if (!href) return <span className="footer-disabled" aria-disabled="true">{children}</span>;
  return <a href={href}>{children}</a>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              className="brand"
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ marginBottom: 4 }}
            >
              <Mark className="mark" style={{ width: 24, height: 24, color: 'var(--fg-1)' }} />
              <Wordmark />
            </a>
            <p>Small, sharp iPhone apps from an independent studio. One useful thing at a time.</p>
            <div style={{ marginTop: 22 }}><AppStoreBadge appId="basehitz" live /></div>
          </div>
          <div className="footer-col">
            <h4>Apps</h4>
            <a href="#dailyset" onClick={(event) => { event.preventDefault(); goTo('dailyset'); }}>DailySet</a>
            <a href="#stash" onClick={(event) => { event.preventDefault(); goTo('stash'); }}>Stash</a>
            <a href="#basehitz" onClick={(event) => { event.preventDefault(); goTo('basehitz'); }}>Base Hitz</a>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <a href="#about" onClick={(event) => { event.preventDefault(); goTo('about'); }}>About</a>
            <a href="#pricing" onClick={(event) => { event.preventDefault(); goTo('pricing'); }}>Pricing</a>
            <a href="#faq" onClick={(event) => { event.preventDefault(); goTo('faq'); }}>FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#waitlist" onClick={(event) => { event.preventDefault(); goTo('waitlist'); }}>Join the waitlist</a>
            <FooterLink href={LINKS.contact}>Contact</FooterLink>
            <FooterLink href={LINKS.support}>Support</FooterLink>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="fine">© 2026 Sugarbuzz Labs LLC. All rights reserved.</span>
          <div className="fb-links">
            <FooterLink href={LINKS.privacy}>Privacy</FooterLink>
            <FooterLink href={LINKS.terms}>Terms</FooterLink>
            <FooterLink href={LINKS.contact}>Contact</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppStoreBadge, MiniScreen };
