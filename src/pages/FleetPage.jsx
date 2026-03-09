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
  { brand: 'Lamborghini', model: 'Huracán Tecnica', hp: '640', engine: 'V10', spec: '640 CV | V10' },
  { brand: 'Ferrari', model: '812 Superfast', hp: '800', engine: 'V12 | Scarico Novitec', spec: '800 CV | V12 | Scarico Novitec' },
  { brand: 'Lamborghini', model: 'Urus Performante', hp: '666', engine: 'V8 | Scarico Akrapovič', spec: '666 CV | V8 | Scarico Akrapovič' },
  { brand: 'Mercedes-AMG', model: 'GT "Tiffany" Edition', hp: '585', engine: 'V8 Biturbo', spec: '585 CV | V8 Biturbo' },
  { brand: 'Mercedes-Benz', model: 'G63 AMG Grand Edition', hp: '585', engine: 'V8 | 1/1000', spec: '585 CV | V8 | 1/1000' },
  { brand: 'McLaren', model: '750S Spider', hp: '750', engine: 'V8 Biturbo', spec: '750 CV | V8 Biturbo' },
  { brand: 'Porsche', model: '911 GT3 RS', hp: '525', engine: 'Flat-6 | Scarico Akrapovič', spec: '525 CV | Flat-6 | Scarico Akrapovič' },
  { brand: 'Audi', model: 'R8 V10 Performance', hp: '620', engine: 'V10', spec: '620 CV | V10' },
  { brand: 'Audi', model: 'RS3 MY 2025', hp: '400', engine: '5 cilindri', spec: '400 CV | 5 cilindri' },
  { brand: 'Lamborghini', model: 'Urus', hp: '650', engine: 'V8 Biturbo', spec: '650 CV | V8 Biturbo' },
]

const rentImages = [rentImg1, rentImg2, rentImg3, rentImg4, rentImg5, rentImg6, rentImg7, rentImg8, rentImg9]

export default function FleetPage() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')
  const countRef = useCountUp('.count-up')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div ref={(el) => { revealRef.current = el; lineRef.current = el; countRef.current = el }} style={{ paddingTop: 'clamp(6rem, 12vh, 9rem)' }}>
      {/* Page hero */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
        <Link to="/" className="reveal-up btn-editorial" style={{ marginBottom: '3rem', display: 'inline-flex' }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          Torna alla home
        </Link>
        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>The Fleet & Rent</div>
        <h1 className="reveal-up t-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1rem' }}>
          Le nostre <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>supercar</em>
        </h1>

        <div className="reveal-up flex flex-wrap gap-8" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="t-data count-up" data-value="10" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label" style={{ fontSize: '0.4rem' }}>Vetture</span>
          </div>
          <div>
            <span className="t-data count-up" data-value="800" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label" style={{ fontSize: '0.4rem' }}>CV Max</span>
          </div>
          <div>
            <span className="t-data count-up" data-value="6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label" style={{ fontSize: '0.4rem' }}>Brand</span>
          </div>
        </div>

        <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '0.8rem', lineHeight: '2', maxWidth: '600px' }}>
          Una flotta esclusiva di vetture straordinarie. Ogni auto è selezionata per offrire
          il massimo delle emozioni su strada.
        </p>
      </div>

      {/* Full fleet — editorial list */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
        <div className="reveal-up t-label mb-8" style={{ color: 'var(--color-red)' }}>The Fleet</div>
        <div className="reveal-line rule" style={{ marginBottom: '1rem' }} />

        {cars.map((car, i) => (
          <div
            key={i}
            className="reveal-up group"
            style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center', gap: 'clamp(1rem, 3vw, 3rem)',
              padding: 'clamp(1.2rem, 2.5vw, 2rem) 0',
              borderBottom: '1px solid var(--color-white-06)',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-red)'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-white-06)'}
          >
            <span className="t-data" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-white-06)', minWidth: 'clamp(60px, 10vw, 120px)', textAlign: 'right', transition: 'color 0.3s' }}
                  ref={el => { if (el) { el.parentElement.addEventListener('mouseenter', () => el.style.color = 'var(--color-red)'); el.parentElement.addEventListener('mouseleave', () => el.style.color = 'var(--color-white-06)') } }}
            >
              {car.hp}
            </span>
            <div>
              <span className="t-label" style={{ fontSize: '0.45rem', display: 'block', marginBottom: '0.2rem' }}>{car.brand}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.4rem)', letterSpacing: '-0.01em' }}>{car.model}</h3>
            </div>
            <span className="t-micro hidden md:block" style={{ fontSize: '0.5rem', color: 'var(--color-white-30)' }}>{car.engine}</span>
          </div>
        ))}
      </div>

      {/* Rent section */}
      <div style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(6rem, 14vh, 10rem) 0' }}>
        <div style={{ padding: '0 var(--page-margin)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>

            {/* Left: Text */}
            <div style={{ gridColumn: '1 / span 5' }} className="col-span-12 lg:col-span-5">
              <div className="reveal-up">
                <span className="t-label" style={{ color: 'var(--color-red)', fontSize: '0.5rem', display: 'block', marginBottom: '1.5rem' }}>Rent</span>
                <h2 className="t-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
                  Noleggia una <em className="t-display-italic">supercar</em>
                </h2>
                <p style={{ color: 'var(--color-white-60)', fontSize: '0.8rem', lineHeight: '2', marginBottom: '1rem', maxWidth: '400px' }}>
                  Non possiedi ancora una supercar? Nessun problema.
                  Grazie alla nostra partnership con i migliori servizi di noleggio,
                  puoi partecipare ai nostri eventi guidando la vettura dei tuoi sogni.
                </p>
                <p style={{ color: 'var(--color-white-30)', fontSize: '0.75rem', lineHeight: '2', marginBottom: '2rem', maxWidth: '400px' }}>
                  Dalla Lamborghini Huracán alla Ferrari 812, dalla McLaren 750S alla Porsche GT3 RS —
                  scegli la tua compagna per un giorno indimenticabile.
                </p>

                <div className="space-y-3" style={{ marginBottom: '2.5rem' }}>
                  {[
                    'Flotta di supercar premium',
                    'Assicurazione completa inclusa',
                    'Consegna al punto di partenza evento',
                    'Assistenza dedicata durante tutto l\'evento',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span style={{ width: '16px', height: '1px', background: 'var(--color-red)' }} />
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-white-60)' }}>{item}</span>
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
            <div style={{ gridColumn: '7 / -1' }} className="col-span-12 lg:col-span-6 lg:col-start-7">
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
                        height: i === 0 ? '100%' : 'clamp(100px, 14vh, 150px)',
                        objectFit: 'cover',
                        filter: 'brightness(0.6) contrast(1.1)',
                        minHeight: i === 0 ? 'clamp(200px, 30vh, 310px)' : undefined,
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
