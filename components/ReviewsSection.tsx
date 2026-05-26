'use client';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';

function Stars({ count }: { count: number }) {
  return <div style={{ display: 'inline-flex', gap: 2, fontSize: 16, letterSpacing: 1 }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: i <= count ? '#C41E3A' : '#E5E5E5' }}>★</span>)}</div>;
}

const REVIEWS = [
  { initials: 'SR', name: 'Sarah R.', stars: 5, source: 'Google Review', text: "Reuben and all the staff at Lopez Quality Auto Repair are fast, fair and AWESOME!!! Fixed my A/C compressor in less than 3 hours. Couldn't believe it. Best shop in Woodland, period." },
  { initials: 'MT', name: 'Mike T.', stars: 5, source: 'Facebook', text: "I was stranded on I-5 and Reuben literally let me use his personal truck to get lunch while they repaired mine. Welcomed us in at 6pm — well after most shops would have turned us away. Treated us like family." },
  { initials: 'JG', name: 'Jennifer G.', stars: 5, source: 'YellowPages', text: "By far the most trustworthy and efficiently run auto repair business around. Honest, reliable, and cost effective. Serving Woodland since 1987 and you can feel that experience in every interaction." },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ background: '#1E1E1E', padding: 'clamp(64px,9vw,120px) clamp(24px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
        <div className="reveal-up" style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,64px)' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: '#C41E3A', fontSize: 13, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 12 }}>· Reviews ·</div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(40px,6vw,80px)', color: '#FFFFFF', margin: 0, lineHeight: 0.95 }}>What Our Customers <span style={{ color: '#C41E3A' }}>Say</span></h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 20, marginTop: 18, color: 'rgba(255,255,255,0.7)', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            <span><Stars count={5} /> <span style={{ marginLeft: 6 }}>Birdeye · 4.2</span></span>
            <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)' }} />
            <span><Stars count={5} /> <span style={{ marginLeft: 6 }}>Facebook · 5.0</span></span>
          </div>
        </div>
        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className={`reveal-up delay-${i + 1}`} style={{ background: '#FFFFFF', borderRadius: 8, padding: '28px 26px 24px', boxShadow: '0 12px 36px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 18, right: 22, fontFamily: "'Playfair Display',serif", fontSize: 64, lineHeight: 1, color: '#C41E3A', opacity: 0.12 }}>"</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#C41E3A', color: '#FFFFFF', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{r.initials}</div>
                <div><div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: '#111111' }}>{r.name}</div><div style={{ marginTop: 2 }}><Stars count={r.stars} /></div></div>
              </div>
              <p style={{ fontFamily: 'Inter,sans-serif', fontStyle: 'italic', fontSize: 14.5, lineHeight: 1.65, color: '#555555', margin: 0, flex: 1 }}>{r.text}</p>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid #E5E5E5', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E3A', display: 'flex', alignItems: 'center', gap: 6 }}>
                <BadgeCheck size={13} />{r.source}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal-up" style={{ textAlign: 'center', marginTop: 'clamp(28px,4vw,44px)' }}>
          <a href="https://www.google.com/search?q=lopez+quality+auto+repair+woodland+ca" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#C41E3A', border: '1.5px solid #C41E3A', padding: '14px 28px', borderRadius: 3, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 220ms, color 220ms' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C41E3A'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C41E3A'; }}>
            See all reviews on Google<ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <style>{`@media(max-width:1023px){.reviews-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
