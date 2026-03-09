import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useLineReveal, useCountUp } from '../hooks/useGsap'
import rentImg1 from '../assets/macchine-rent/macchine-rent-1.webp'
import rentImg2 from '../assets/macchine-rent/macchine-rent-2.webp'
import rentImg3 from '../assets/macchine-rent/macchine-rent-3.webp'
import rentImg4 from '../assets/macchine-rent/macchine-rent-4.webp'
import rentImg5 from '../assets/macchine-rent/macchine-rent-5.webp'
import rentImg6 from '../assets/macchine-rent/macchine-rent-6.webp'
import rentImg7 from '../assets/macchine-rent/macchine-rent-7.webp'
import rentImg8 from '../assets/macchine-rent/macchine-rent-8.webp'
import rentImg9 from '../assets/macchine-rent/macchine-rent-9.webp'

const cars = [
  { brand: 'Lamborghini', model: 'Huracán Tecnica', hp: '640', engine: 'V10', slug: 'huracan-tecnica' },
  { brand: 'Ferrari', model: '812 Superfast', hp: '800', engine: 'V12 | Scarico Novitec', slug: '812-superfast' },
  { brand: 'Lamborghini', model: 'Urus Performante', hp: '666', engine: 'V8 | Scarico Akrapovič', slug: 'urus-performante' },
  { brand: 'Mercedes-AMG', model: 'GT "Tiffany" Edition', hp: '585', engine: 'V8 Biturbo', slug: 'amg-gt-tiffany' },
  { brand: 'Mercedes-Benz', model: 'G63 AMG Grand Edition', hp: '585', engine: 'V8 | 1/1000', slug: 'g63-grand-edition' },
  { brand: 'McLaren', model: '750S Spider', hp: '750', engine: 'V8 Biturbo', slug: null },
  { brand: 'Porsche', model: '911 GT3 RS', hp: '525', engine: 'Flat-6 | Scarico Akrapovič', slug: null },
  { brand: 'Audi', model: 'R8 V10 Performance', hp: '620', engine: 'V10', slug: 'r8-v10-performance' },
  { brand: 'Audi', model: 'RS3 MY 2025', hp: '400', engine: '5 cilindri', slug: 'rs3-2025' },
  { brand: 'Lamborghini', model: 'Urus', hp: '650', engine: 'V8 Biturbo', slug: null },
]

const rentImages = [rentImg1, rentImg2, rentImg3, rentImg4, rentImg5, rentImg6, rentImg7, rentImg8, rentImg9]

export default function FleetPage() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')
  const countRef = useCountUp('.count-up')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div ref={(el) => { revealRef.current = el; lineRef.current = el; countRef.current = el }} style={{ paddingTop: 'clamp(5rem, 10vh, 8rem)' }}>
      {/* Page hero */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <Link to="/" className="reveal-up btn-editorial" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          Torna alla home
        </Link>
        <div className="reveal-up t-label mb-4" style={{ color: 'var(--color-red)' }}>The Fleet & Rent</div>
        <h1 className="reveal-up t-display" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1rem' }}>
          Le nostre <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>supercar</em>
        </h1>

        <div className="reveal-up flex flex-wrap gap-8" style={{ marginBottom: '1.2rem' }}>
          <div>
            <span className="t-data count-up" data-value="10" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label">Vetture</span>
          </div>
          <div>
            <span className="t-data count-up" data-value="800" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label">CV Max</span>
          </div>
          <div>
            <span className="t-data count-up" data-value="6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label">Brand</span>
          </div>
        </div>

        <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '650px' }}>
          Una flotta esclusiva di vetture straordinarie. Ogni auto è selezionata per offrire
          il massimo delle emozioni su strada.
        </p>
      </div>

      {/* Full fleet — editorial list */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>The Fleet</div>
        <div className="reveal-line rule" style={{ marginBottom: '0.75rem' }} />

        {cars.map((car, i) => {
          const Wrapper = car.slug ? Link : 'div'
          const wrapperProps = car.slug ? { to: `/fleet/${car.slug}` } : {}
          return (
            <Wrapper
              key={i}
              {...wrapperProps}
              className="reveal-up group"
              style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'center', gap: 'clamp(1.5rem, 3vw, 3rem)',
                padding: 'clamp(1.2rem, 2.5vw, 1.8rem) 0',
                borderBottom: '1px solid var(--color-white-06)',
                transition: 'border-color 0.3s ease',
                cursor: car.slug ? 'pointer' : 'default',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-white-06)'}
            >
              <span className="t-data" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-white-06)', minWidth: 'clamp(60px, 10vw, 120px)', textAlign: 'right', transition: 'color 0.3s' }}
                    ref={el => { if (el) { el.parentElement.addEventListener('mouseenter', () => el.style.color = 'var(--color-red)'); el.parentElement.addEventListener('mouseleave', () => el.style.color = 'var(--color-white-06)') } }}
              >
                {car.hp}
              </span>
              <div>
                <span className="t-label" style={{ display: 'block', marginBottom: '0.2rem' }}>{car.brand}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', letterSpacing: '-0.01em' }}>{car.model}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="t-micro hidden md:block" style={{ color: 'var(--color-white-30)' }}>{car.engine}</span>
                {car.slug && (
                  <svg className="hidden md:block" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: 'var(--color-white-12)', transition: 'color 0.3s' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
            </Wrapper>
          )
        })}
      </div>

      {/* Rent section */}
      <div style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
        <div style={{ padding: '0 var(--page-margin)' }}>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>

            {/* Left: Text */}
            <div style={{ gridColumn: '1 / span 5' }}>
              <div className="reveal-up">
                <span className="t-label" style={{ color: 'var(--color-red)', display: 'block', marginBottom: '1rem' }}>Rent</span>
                <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem' }}>
                  Noleggia una <em className="t-display-italic">supercar</em>
                </h2>
                <p style={{ color: 'var(--color-white-60)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Non possiedi ancora una supercar? Nessun problema.
                  Grazie alla nostra partnership con i migliori servizi di noleggio,
                  puoi partecipare ai nostri eventi guidando la vettura dei tuoi sogni.
                </p>
                <p style={{ color: 'var(--color-white-30)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Dalla Lamborghini Huracán alla Ferrari 812, dalla McLaren 750S alla Porsche GT3 RS —
                  scegli la tua compagna per un giorno indimenticabile.
                </p>

                <div className="space-y-3" style={{ marginBottom: '2rem' }}>
                  {[
                    'Flotta di supercar premium',
                    'Assicurazione completa inclusa',
                    'Consegna al punto di partenza evento',
                    'Assistenza dedicata durante tutto l\'evento',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span style={{ width: '20px', height: '1px', background: 'var(--color-red)' }} />
                      <span style={{ fontSize: '1.1rem', color: 'var(--color-white-60)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/#contatti" className="btn-editorial">
                  Richiedi informazioni
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right: Image grid */}
            <div style={{ gridColumn: '7 / -1' }}>
              <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                {rentImages.map((img, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  >
                    <img
                      src={img}
                      alt="Supercar noleggio"
                      className="transition-transform duration-700 group-hover:scale-110"
                      style={{
                        width: '100%',
                        height: i === 0 ? '100%' : 'clamp(90px, 12vh, 140px)',
                        objectFit: 'cover',
                        filter: 'brightness(0.6) contrast(1.1)',
                        minHeight: i === 0 ? 'clamp(180px, 26vh, 280px)' : undefined,
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.2)', transition: 'background 0.3s' }}
                         className="group-hover:!bg-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
