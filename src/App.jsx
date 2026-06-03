import React from 'react';
import {
  FAQ,
  Footer,
  Gallery,
  Header,
  Hero,
  Pricing,
  Studio,
  Waitlist,
  AppSection,
} from './components/sections.jsx';
import { APPS } from './data/siteData.jsx';

export default function App() {
  React.useEffect(() => {
    document.body.style.background = '#0A0A0B';
  }, []);

  return (
    <div className="site theme-buzz dark" id="top">
      <Header />
      <main>
        <Hero dark />
        <div id="apps">
          {APPS.map((app, index) => (
            <AppSection key={app.id} app={app} index={index} dark />
          ))}
        </div>
        <Gallery dark />
        <Pricing />
        <Studio />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
