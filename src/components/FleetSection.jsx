import { Link } from 'react-router-dom'
import { useReveal, useLineReveal, useCountUp } from '../hooks/useGsap'
import rentImg1 from '../assets/macchine-rent/macchine-rent-1.webp'
import rentImg2 from '../assets/macchine-rent/macchine-rent-2.webp'
import rentImg3 from '../assets/macchine-rent/macchine-rent-3.webp'
import rentImg4 from '../assets/macchine-rent/macchine-rent-4.webp'
import rentImg5 from '../assets/macchine-rent/macchine-rent-5.webp'
import rentImg6 from '../assets/macchine-rent/macchine-rent-6.webp'

const cars = [
  { brand: 'Lamborghini', model: 'Huracán Tecnica', hp: '640', engine: 'V10', spec: '640 CV | V10' },
  { brand: 'Ferrari', model: '812 Superfast', hp: '800', engine: 'V12', spec: '800 CV | V12 | Scarico Novitec' },
  { brand: 'Lamborghini', model: 'Urus Performante', hp: '666', engine: 'V8 Biturbo', spec: '666 CV | V8 | Scarico Akrapovič' },
  { brand: 'Mercedes-AMG', model: 'GT "Tiffany"', hp: '585', engine: 'V8 Biturbo', spec: '585 CV | V8 Biturbo' },
  { brand: 'McLaren', model: '750S Spider', hp: '750', engine: 'V8 Biturbo', spec: '750 CV | V8 Biturbo' },
  { brand: 'Porsche', model: '911 GT3 RS', hp: '525', engine: 'Flat-6', spec: '525 CV | Flat-6 | Scarico Akrapovič' },
]

const rentImages = [
  { src: rentImg1, span: 'col-span-2 row-span-2' },
  { src: rentImg2, span: '' },
  { src: rentImg3, span: '' },
  { src: rentImg4, span: '' },
  { src: rentImg5, span: '' },
  { src: rentImg6, span: '' },
]

export default function FleetSection() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')
  const countRef = useCountUp('.count-up')

  return (
    <section id="fleet" ref={(el) => { revealRef.current = el; lineRef.current = el; countRef.current = el }} style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(6rem, 14vh, 10rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        {/* Background number */}
        <div className="bg-number" style={{ top: '-5%', right: '0' }}>10</div>

        {/* Section label */}
        <div className="reveal-up t-label mb-12" style={{ color: 'var(--color-red)' }}>[ 03 — The Fleet & Rent ]</div>

        {/* Header with dramatic data */}
        <div className="reveal-up" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 'clamp(2rem, 4vw, 4rem)', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <h2 className="t-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
            Le nostre{' '}
            <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>supercar</em>
          </h2>
          <div className="flex gap-8" style={{ marginBottom: '0.5rem' }}>
            <div>
              <span className="t-data count-up" data-value="10" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
              <span className="t-label" style={{ fontSize: '0.4rem' }}>Vetture</span>
            </div>
            <div>
              <span className="t-data count-up" data-value="800" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
              <span className="t-label" style={{ fontSize: '0.4rem' }}>CV Max</span>
            </div>
          </div>
        </div>

        {/* Cars — editorial list with dramatic numbers */}
        <div style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          {cars.map((car, i) => (
            <div
              key={i}
              className="reveal-up group"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'center',
                gap: 'clamp(1rem, 3vw, 3rem)',
                padding: 'clamp(1.2rem, 2.5vw, 2rem) 0',
                borderBottom: '1px solid var(--color-white-06)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-white-06)'}
            >
              {/* HP number — dramatic */}
              <span className="t-data" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-white-06)', minWidth: 'clamp(60px, 10vw, 120px)', textAlign: 'right', transition: 'color 0.3s' }}
                    ref={el => { if (el) { el.parentElement.addEventListener('mouseenter', () => el.style.color = 'var(--color-red)'); el.parentElement.addEventListener('mouseleave', () => el.style.color = 'var(--color-white-06)') } }}
              >
                {car.hp}
              </span>

              {/* Car info */}
              <div>
                <span className="t-label" style={{ fontSize: '0.45rem', display: 'block', marginBottom: '0.2rem' }}>{car.brand}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.4rem)', letterSpacing: '-0.01em' }}>{car.model}</h3>
              </div>

              {/* Engine badge */}
              <span className="t-micro hidden md:block" style={{ fontSize: '0.5rem', color: 'var(--color-white-30)' }}>
                {car.engine}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal-line rule" style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }} />

        {/* Rent section — editorial split */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)', alignItems: 'start' }}>

          {/* Left: Rent text */}
          <div className="col-span-12 lg:col-span-5" style={{ gridColumn: 'span 5' }}>
            <div className="reveal-up">
              <span className="t-label" style={{ color: 'var(--color-red)', fontSize: '0.5rem', display: 'block', marginBottom: '1.5rem' }}>Rent</span>
              <h3 className="t-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                Noleggia una{' '}
                <em className="t-display-italic">supercar</em>
              </h3>
              <p style={{ color: 'var(--color-white-60)', fontSize: '0.8rem', lineHeight: '2', marginBottom: '1.5rem', maxWidth: '400px' }}>
                Non possiedi ancora una supercar? Nessun problema.
                Grazie alla nostra partnership con i migliori servizi di noleggio,
                puoi partecipare ai nostri eventi guidando la vettura dei tuoi sogni.
              </p>

              <div className="reveal-up space-y-3" style={{ marginBottom: '2.5rem' }}>
                {[
                  'Flotta di supercar premium',
                  'Assicurazione completa inclusa',
                  'Consegna al punto di partenza',
                  'Assistenza dedicata',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{ width: '16px', height: '1px', background: 'var(--color-red)' }} />
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-white-60)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contatti" className="btn-editorial reveal-up">
                Richiedi informazioni
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>

          {/* Right: Rent images — editorial grid */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" style={{ gridColumn: '7 / -1' }}>
            <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
              {rentImages.map((img, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden ${img.span}`}
                >
                  <img
                    src={img.src}
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

        {/* CTA to full page */}
        <div className="reveal-up" style={{ textAlign: 'center', paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <Link to="/fleet" className="btn-editorial">
            Vedi tutta la flotta
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
