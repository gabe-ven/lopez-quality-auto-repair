'use client';
import { Phone } from 'lucide-react';

export default function PromoBar() {
  return (
    <div style={{ background: '#C41E3A', padding: '9px 24px', textAlign: 'center' }}>
      <p style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        Quality Auto Repair Since 1987 · Free Tow With Repairs · 24/7 Emergency Service — Woodland, CA
        <span style={{ opacity: 0.5 }}>·</span>
        <a href="tel:5306664031" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, fontWeight: 700 }}>
          <Phone size={13} />(530) 666-4031
        </a>
      </p>
    </div>
  );
}
