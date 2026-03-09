import { useReveal, useLineReveal } from '../hooks/useGsap'
import aboutImg from '../assets/macchine-rent/macchine-rent-6.webp'

export default function About() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')

  return (
    <section id="chi-siamo" ref={(el) => { revealRef.current = el; lineRef.current = el }} style={{ background: 'var(--color-bg)', padding: 'clamp(6rem, 14vh, 10rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        {/* Ghost text */}
        <div className="ghost-text" style={{ top: '-10%', left: '-5%' }}>ABOUT</div>

        {/* Section label */}
        <div className="reveal-up t-label mb-12" style={{ color: 'var(--color-red)' }}>[ 01 — Chi Siamo ]</div>

        {/* Broken grid editorial layout */}
        <div className="editorial-grid" style={{ rowGap: 'clamp(2rem, 4vw, 4rem)' }}>

          {/* Left column: Text content */}
          <div className="col-span-12 lg:col-span-5" style={{ gridColumn: 'span 5' }}>
            <h2 className="reveal-up t-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block' }}>Dove il lusso</span>
              <span style={{ display: 'block' }}>incontra</span>
              <span style={{ display: 'block' }}><em className="t-display-italic">l'adrenalina</em></span>
            </h2>

            <div className="reveal-line rule" style={{ marginBottom: '2rem', maxWidth: '120px' }} />

            <p className="reveal-up" style={{ color: 'var(--color-white-60)', fontSize: '0.8rem', lineHeight: '2', maxWidth: '420px', marginBottom: '1.5rem' }}>
              Elle Events è la firma esclusiva che trasforma il mondo delle supercar in un'esperienza senza pari,
              dove il lusso si fonde con l'adrenalina.
            </p>
            <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '0.75rem', lineHeight: '2', maxWidth: '420px', marginBottom: '3rem' }}>
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
                <div key={item.num} className="reveal-up flex gap-5 items-start">
                  <span className="t-data" style={{ fontSize: '2rem', color: 'var(--color-white-06)', lineHeight: '1' }}>{item.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--color-white-30)', fontSize: '0.7rem', lineHeight: '1.8' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Image — offset for broken grid feel */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" style={{ gridColumn: '7 / -1' }}>
            <div className="reveal-up relative" style={{ marginTop: 'clamp(0rem, 8vw, 6rem)' }}>
              <div className="img-vignette overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Elle Events experience"
                  style={{ width: '100%', height: 'clamp(400px, 60vh, 700px)', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.1)' }}
                />
              </div>

              {/* Floating data accent */}
              <div className="reveal-up" style={{ position: 'absolute', bottom: '-2rem', left: '-3rem', padding: '1.5rem 2rem', background: 'var(--color-bg)' }}>
                <span className="t-data" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-red)', display: 'block', lineHeight: '0.85' }}>100+</span>
                <span className="t-label" style={{ fontSize: '0.5rem' }}>Eventi realizzati</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial claim line */}
        <div className="reveal-up" style={{ marginTop: 'clamp(5rem, 10vh, 8rem)', textAlign: 'center' }}>
          <div className="reveal-line rule" style={{ marginBottom: '2rem' }} />
          <p className="t-display-italic" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', color: 'var(--color-white-30)' }}>
            Esclusivo. Raffinato. <span style={{ color: 'var(--color-red)' }}>Unconventional.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
