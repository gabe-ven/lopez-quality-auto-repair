'use client';

const CREDENTIALS = [
  { num: '01', title: 'State Licensed', desc: 'Fully licensed by the State of California Bureau of Automotive Repair — License #268843.' },
  { num: '02', title: 'Since 1987', desc: 'Nearly four decades of quality service to the Woodland community and surrounding areas.' },
  { num: '03', title: 'Family Owned', desc: 'Owner Reuben Lopez and his team treat every customer as a personalized individual — not just a number.' },
];

export default function AboutSection() {
  return (
    <section id="about">

      <div style={{ background: '#0F0F0F', padding: 'clamp(22px,3vw,36px) clamp(24px,5vw,80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: '#C41E3A', fontSize: 11, fontWeight: 700, letterSpacing: '0.36em', textTransform: 'uppercase', flexShrink: 0 }}>Our Story</div>
        <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(15px,1.5vw,19px)', margin: 0, flex: 1, textAlign: 'center' }}>
          "Serving Woodland families with honest work, affordable prices, and friendly service — since 1987."
        </p>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: 'rgba(255,255,255,0.25)', fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', flexShrink: 0 }}>Woodland, CA</div>
      </div>

      <div style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(52px,8vw,108px) clamp(24px,5vw,80px)' }}>
          <div className="about-main-grid" style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 'clamp(40px,7vw,96px)', alignItems: 'center' }}>

            <div className="reveal-left">
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: '#C41E3A', fontSize: 11, fontWeight: 700, letterSpacing: '0.36em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ display: 'block', width: 28, height: 1.5, background: '#C41E3A' }} />
                Welcome to Lopez Quality Auto Repair
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(52px,7vw,96px)', color: '#111111', margin: '0 0 24px', lineHeight: 0.9, letterSpacing: '0.01em' }}>
                AUTO REPAIR<br />
                <span style={{ color: '#C41E3A' }}>DONE RIGHT.</span>
              </h2>

              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, lineHeight: 1.82, color: '#555555', display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 32 }}>
                <p style={{ margin: 0 }}>At Lopez Quality Auto Repair, we've been Woodland's trusted neighborhood shop since 1987. We take pride in treating every customer as an individual — not just a number — offering genuine car care and superior service every time you walk through our doors.</p>
                <p style={{ margin: 0 }}>Our experienced team handles everything from oil changes and brake service to full engine replacements and RV repair. We offer free towing with repairs, 24/7 emergency service, loaner vehicles, and Saturday hours to work around your schedule.</p>
              </div>

              <blockquote style={{ margin: 0, padding: '0 0 0 20px', borderLeft: '3px solid #C41E3A', fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 17, color: '#1A1A1A', lineHeight: 1.65 }}>
                No appointments necessary. Bilingual-friendly staff. Honest, reliable, cost effective — since 1987.
              </blockquote>
            </div>

            <div className="reveal-right">
              <div style={{ 
                borderRadius: 12, 
                overflow: 'hidden', 
                aspectRatio: '4/3', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.05)', 
                border: '1px solid rgba(0,0,0,0.08)',
                position: 'relative',
                backgroundColor: '#f5f5f5'
              }}>
                <img 
                  src="/assets/Lopez-Quality-Auto-Repair_f0dd08fe6c10d1c8b430ca37a3fb8fe5.jpg" 
                  alt="Lopez Quality Auto Repair Shop and Team" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} 
                  className="about-image"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div style={{ background: '#F8F8F8', borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
          <div className="credentials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
            {CREDENTIALS.map((c, i) => (
              <div
                key={i}
                className={`cred-cell reveal-up delay-${i + 1}`}
                style={{
                  padding: 'clamp(28px,4vw,52px) clamp(16px,2.5vw,32px)',
                  borderRight: i < 2 ? '1px solid #EBEBEB' : 'none',
                  borderTop: '3px solid transparent',
                  transition: 'border-color 220ms, background 220ms',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderTopColor = '#C41E3A'; e.currentTarget.style.background = '#FFFFFF'; }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'transparent'; e.currentTarget.style.background = 'transparent'; }}
              >
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 56, color: '#C41E3A', lineHeight: 1, marginBottom: 10, opacity: 0.22 }}>{c.num}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(20px,2.2vw,28px)', color: '#111111', letterSpacing: '0.02em', marginBottom: 10 }}>{c.title}</div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#777777', margin: 0, lineHeight: 1.68 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-image:hover {
          transform: scale(1.04);
        }
        @media(max-width:1023px){
          .about-main-grid{grid-template-columns:1fr!important}
          .credentials-grid{grid-template-columns:1fr!important}
          .cred-cell{border-right:none!important;border-bottom:1px solid #EBEBEB}
          .cred-cell:last-child{border-bottom:none}
        }
      `}</style>
    </section>
  );
}
