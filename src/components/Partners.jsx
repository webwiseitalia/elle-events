import { useReveal, useLineReveal } from '../hooks/useGsap'

const partners = [
  { name: 'Rental King', desc: 'Noleggio auto, 30+ anni di esperienza' },
  { name: 'Car Wrapping Services', desc: 'Personalizzazione e protezione veicoli' },
  { name: 'Noleggio Supercar Luxury', desc: 'Noleggio supercar premium' },
  { name: 'Lavorazioni Meccaniche Precision', desc: 'Lavorazioni meccaniche di precisione' },
]

export default function Partners() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')

  return (
    <section ref={(el) => { revealRef.current = el; lineRef.current = el }} style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>[ 05 — Partner ]</div>

        {/* Giant title */}
        <div className="reveal-up" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
          <h2 className="t-display" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: '0.9', marginBottom: '1.2rem' }}>
            I nostri <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>partner</em>
          </h2>
          <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px' }}>
            Collaboriamo con i migliori professionisti del settore per garantire un'esperienza impeccabile.
          </p>
        </div>

        <div className="reveal-line rule" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }} />

        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          {partners.map((partner, i) => (
            <div
              key={i}
              className="reveal-up group"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'center',
                gap: 'clamp(1.5rem, 3vw, 3rem)',
                padding: 'clamp(1.2rem, 2.5vw, 1.8rem) 0',
                borderBottom: '1px solid var(--color-white-06)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-white-06)'}
            >
              <span className="t-data" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-white-06)', minWidth: '3rem', textAlign: 'right' }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', letterSpacing: '-0.01em', marginBottom: '0.2rem' }}>{partner.name}</h3>
                <p style={{ color: 'var(--color-white-30)', fontSize: '1.1rem' }}>{partner.desc}</p>
              </div>

              <div style={{
                width: '48px', height: '48px',
                border: '1px solid var(--color-white-06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.3s',
              }}>
                <span className="t-data" style={{ fontSize: '1.4rem', color: 'var(--color-white-30)' }}>
                  {partner.name.charAt(0)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-up" style={{ textAlign: 'center', padding: 'clamp(1.5rem, 3vw, 2.5rem) 0' }}>
          <h3 className="t-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>Diventa Partner</h3>
          <p style={{ color: 'var(--color-white-30)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Vuoi far parte del network Elle Events? Contattaci per scoprire le opportunità
            di partnership e sponsorship.
          </p>
          <a href="#contatti" className="btn-solid">Contattaci</a>
        </div>
      </div>
    </section>
  )
}
