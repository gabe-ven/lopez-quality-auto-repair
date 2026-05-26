'use client';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Placeholder from './Placeholder';

export default function HeroSection({ onSchedule }: { onSchedule: () => void }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.32}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" style={{ position: 'relative', background: '#0A0A0A', overflow: 'hidden' }}>
      <div ref={bgRef} style={{ position: 'absolute', inset: '-18% 0 -18% 0', willChange: 'transform', zIndex: 0 }}>
        <Placeholder label="/assets/images/hero-cars.png" w={1920} h={1080} tone="dark" src="/assets/images/hero-cars.png" />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.48) 55%,rgba(0,0,0,0.2) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, minHeight: 'clamp(560px,70vh,780px)', display: 'flex', alignItems: 'center', padding: 'clamp(48px,8vh,100px) clamp(24px,5vw,80px)' }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <span style={{ color: '#C41E3A', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 12, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase' }}>Quality Service Since 1987 · Woodland, CA</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(52px,8.5vw,108px)', lineHeight: 0.92, color: '#FFFFFF', margin: 0, letterSpacing: '0.01em' }}>
            Honest, Reliable<br />
            <span style={{ color: '#C41E3A' }}>Auto Repair</span><br />
            in Woodland
          </h1>
          <p style={{ fontFamily: 'Inter,sans-serif', color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(15px,1.6vw,18px)', marginTop: 22, marginBottom: 34, maxWidth: 480, lineHeight: 1.65 }}>
            Family-owned since 1987. Free tow with repairs, 24/7 emergency service, no appointments needed. Trusted by Woodland for nearly 4 decades.
          </p>
          <button
            onClick={onSchedule}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#C41E3A', color: '#ffffff', border: 'none', borderRadius: 50, padding: '15px 28px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 200ms, transform 200ms', boxShadow: '0 6px 24px rgba(196,30,58,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.background='#A31830'; e.currentTarget.style.transform='translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#C41E3A'; e.currentTarget.style.transform='translateY(0)'; }}>
            Schedule Online Today <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
