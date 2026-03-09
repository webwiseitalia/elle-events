import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useLineReveal, useCountUp, useGhostParallax, gsap, ScrollTrigger } from '../hooks/useGsap'
import rentImg1 from '../assets/foto/foto-5.webp'
import rentImg2 from '../assets/foto/foto-13.webp'
import rentImg3 from '../assets/foto/foto-7.webp'
import rentImg4 from '../assets/foto/foto-10.webp'
import rentImg5 from '../assets/foto/foto-15.webp'
import rentImg6 from '../assets/foto/foto-12.webp'

const cars = [
  { brand: 'Lamborghini', model: 'Huracán Tecnica', hp: '640', engine: 'V10', slug: 'huracan-tecnica' },
  { brand: 'Ferrari', model: '812 Superfast', hp: '800', engine: 'V12', slug: '812-superfast' },
  { brand: 'Lamborghini', model: 'Urus Performante', hp: '666', engine: 'V8 Biturbo', slug: 'urus-performante' },
  { brand: 'Mercedes-AMG', model: 'GT "Tiffany"', hp: '585', engine: 'V8 Biturbo', slug: 'amg-gt-tiffany' },
  { brand: 'McLaren', model: '750S Spider', hp: '750', engine: 'V8 Biturbo', slug: null },
  { brand: 'Porsche', model: '911 GT3 RS', hp: '525', engine: 'Flat-6', slug: null },
]

const rentImages = [rentImg1, rentImg2, rentImg3, rentImg4, rentImg5, rentImg6]

export default function FleetSection() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')
  const countRef = useCountUp('.count-up')
  const ghostRef = useGhostParallax('.ghost-text')
  const stripRef = useRef(null)
  const rentSectionRef = useRef(null)

  useEffect(() => {
    if (!stripRef.current || !rentSectionRef.current) return
    const strip = stripRef.current
    const ctx = gsap.context(() => {
      gsap.to(strip, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: rentSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="fleet" ref={(el) => { revealRef.current = el; lineRef.current = el; countRef.current = el; ghostRef.current = el }} style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        {/* Ghost text */}
        <div className="ghost-text" style={{ top: '-5%', left: '-8%' }}>FLEET</div>

        {/* Background number */}
        <div className="bg-number" style={{ top: '-5%', right: '0' }}>10</div>

        {/* Section label */}
        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>[ 03 — The Fleet & Rent ]</div>

        {/* Giant title */}
        <div className="reveal-up" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
          <h2 className="t-display" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: '0.9' }}>
            Le nostre{' '}
            <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>supercar</em>
          </h2>
        </div>

        {/* Data counters */}
        <div className="reveal-up flex gap-10" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <div>
            <span className="t-data count-up" data-value="10" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label">Vetture</span>
          </div>
          <div>
            <span className="t-data count-up" data-value="800" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', display: 'block', lineHeight: '1' }}>0</span>
            <span className="t-label">CV Max</span>
          </div>
        </div>

        {/* Cars — editorial list with dramatic numbers */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          {cars.map((car, i) => {
            const Wrapper = car.slug ? Link : 'div'
            const wrapperProps = car.slug ? { to: `/fleet/${car.slug}` } : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className="reveal-up group"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  alignItems: 'center',
                  gap: 'clamp(1.5rem, 3vw, 3rem)',
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
                  <span className="t-micro hidden md:block" style={{ color: 'var(--color-white-30)' }}>
                    {car.engine}
                  </span>
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

        <div className="reveal-line rule" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }} />

        {/* Rent title */}
        <div className="reveal-up" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }}>
          <span className="t-label" style={{ color: 'var(--color-red)', display: 'block', marginBottom: '0.75rem' }}>Rent</span>
          <h3 className="t-display" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: '0.9' }}>
            Noleggia una{' '}
            <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>supercar</em>
          </h3>
        </div>

        {/* Rent section — text + horizontal carousel below */}
        <div ref={rentSectionRef}>

          {/* Rent text */}
          <div className="reveal-up" style={{ maxWidth: '700px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <p style={{ color: 'var(--color-white-60)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Non possiedi ancora una supercar? Nessun problema.
              Grazie alla nostra partnership con i migliori servizi di noleggio,
              puoi partecipare ai nostri eventi guidando la vettura dei tuoi sogni.
            </p>

            <div className="reveal-up space-y-3" style={{ marginBottom: '2rem' }}>
              {[
                'Flotta di supercar premium',
                'Assicurazione completa inclusa',
                'Consegna al punto di partenza',
                'Assistenza dedicata',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ width: '20px', height: '1px', background: 'var(--color-red)' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-white-60)' }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="#contatti" className="btn-editorial reveal-up">
              Richiedi informazioni
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>

        {/* Horizontal scrolling carousel — full width */}
        <div style={{ overflow: 'hidden', position: 'relative', marginLeft: 'calc(var(--page-margin) * -1)', marginRight: 'calc(var(--page-margin) * -1)' }}>
          {/* Left/right fade masks */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '80px', background: 'linear-gradient(to right, var(--color-bg-elevated), transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '80px', background: 'linear-gradient(to left, var(--color-bg-elevated), transparent)', zIndex: 2, pointerEvents: 'none' }} />

          <div ref={stripRef} style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 16px)', width: 'max-content' }}>
            {[...rentImages, ...rentImages].map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden"
                style={{ flex: '0 0 auto', width: 'clamp(280px, 30vw, 420px)' }}
              >
                <img
                  src={img}
                  alt="Supercar noleggio"
                  className="transition-transform duration-700 group-hover:scale-105"
                  style={{
                    width: '100%',
                    height: 'clamp(200px, 30vh, 320px)',
                    objectFit: 'cover',
                    filter: 'brightness(0.65) contrast(1.1)',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', transition: 'background 0.3s' }}
                     className="group-hover:!bg-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA to full page */}
        <div className="reveal-up" style={{ textAlign: 'center', paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <Link to="/fleet" className="btn-editorial">
            Vedi tutta la flotta
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
