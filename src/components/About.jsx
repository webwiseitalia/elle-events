import { useReveal, useLineReveal, useImageParallax, useGhostParallax } from '../hooks/useGsap'
import aboutImg from '../assets/foto/foto-1.webp'

export default function About() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')
  const parallaxRef = useImageParallax('.parallax-img')
  const ghostRef = useGhostParallax('.ghost-text')

  return (
    <section id="chi-siamo" ref={(el) => { revealRef.current = el; lineRef.current = el; parallaxRef.current = el; ghostRef.current = el }} style={{ background: 'var(--color-bg)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        {/* Ghost text */}
        <div className="ghost-text" style={{ top: '-10%', left: '-5%' }}>ABOUT</div>

        {/* Section label */}
        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>[ 01 — Chi Siamo ]</div>

        {/* Giant title */}
        <div className="reveal-up" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
          <h2 className="t-display" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: '0.9' }}>
            <span style={{ display: 'block' }}>Dove il lusso</span>
            <span style={{ display: 'block' }}>incontra <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>l'adrenalina</em></span>
          </h2>
        </div>

        {/* Broken grid editorial layout */}
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)', rowGap: 'clamp(2rem, 4vw, 3rem)' }}>

          {/* Left column: Text content */}
          <div style={{ gridColumn: '1 / span 6', paddingTop: 'clamp(2rem, 4vw, 4rem)' }}>

            <div className="reveal-line rule" style={{ marginBottom: '1.5rem', maxWidth: '120px' }} />

            <p className="reveal-up" style={{ color: 'var(--color-white-60)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              Elle Events è la firma esclusiva che trasforma il mondo delle supercar in un'esperienza senza pari,
              dove il lusso si fonde con l'adrenalina.
            </p>
            <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Siamo specializzati nella creazione di eventi unici e non convenzionali,
              pensati per possessori di supercar e per chi cerca emozioni senza compromessi.
              La nostra missione è ridefinire l'esperienza del lusso.
            </p>

            {/* Editorial features — stacked, minimal */}
            <div className="space-y-6">
              {[
                { num: '01', title: 'Selezione esclusiva', desc: 'Numero limitato di partecipanti per un\'esperienza intima e unica.' },
                { num: '02', title: 'Location straordinarie', desc: 'Percorsi mozzafiato tra Alpi, Langhe e Riviera.' },
                { num: '03', title: 'Servizio dedicato', desc: 'Ogni dettaglio è curato per superare le aspettative.' },
                { num: '04', title: 'Community esclusiva', desc: 'Una rete di veri intenditori che condividono la passione.' },
              ].map((item) => (
                <div key={item.num} className="reveal-up flex gap-4 items-start">
                  <span className="t-data" style={{ fontSize: '2.5rem', color: 'var(--color-white-06)', lineHeight: '1' }}>{item.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--color-white-30)', fontSize: '1.05rem', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Image — offset for broken grid feel */}
          <div style={{ gridColumn: '7 / -1', position: 'relative', zIndex: 1 }}>
            <div className="reveal-up relative">
              <div className="img-vignette overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Elle Events experience"
                  className="parallax-img"
                  style={{ width: '100%', height: 'clamp(400px, 55vh, 600px)', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.1)' }}
                />
              </div>

              {/* Floating data accent */}
              <div className="reveal-up" style={{ position: 'absolute', bottom: '-1.5rem', left: '-2rem', padding: '1rem 1.5rem', background: 'var(--color-bg)' }}>
                <span className="t-data" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-red)', display: 'block', lineHeight: '0.85' }}>100+</span>
                <span className="t-label">Eventi realizzati</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial claim line */}
        <div className="reveal-up" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)', textAlign: 'center' }}>
          <div className="reveal-line rule" style={{ marginBottom: '1.5rem' }} />
          <p className="t-display-italic" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', color: 'var(--color-white-30)' }}>
            Esclusivo. Raffinato. <span style={{ color: 'var(--color-red)' }}>Unconventional.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
