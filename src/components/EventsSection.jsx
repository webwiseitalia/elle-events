import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useLineReveal, useImageParallax, useGhostParallax } from '../hooks/useGsap'
import eventImg from '../assets/prossimo evento/prossimo evento-2.webp'

const nextEvent = {
  name: 'DREAMRIDE',
  tagline: "L'evento flagship",
  desc: "L'esperienza definitiva per supercar. Un tour esclusivo tra le strade più suggestive del Piemonte, culminando in una serata indimenticabile.",
  date: '2025-03-22',
  location: 'Torino — Langhe — Riviera',
  spots: 12,
}

function Countdown({ targetDate }) {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      }
    }
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div className="flex gap-5 md:gap-8">
      {[
        { val: time.days, label: 'Giorni' },
        { val: time.hours, label: 'Ore' },
        { val: time.mins, label: 'Min' },
        { val: time.secs, label: 'Sec' },
      ].map((item) => (
        <div key={item.label}>
          <span className="t-data block" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--color-white)', lineHeight: '0.85' }}>
            {String(item.val).padStart(2, '0')}
          </span>
          <span className="t-label" style={{ marginTop: '0.4rem', display: 'block' }}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function EventsSection() {
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')
  const parallaxRef = useImageParallax('.parallax-img')
  const ghostRef = useGhostParallax('.ghost-text')

  return (
    <section id="eventi" ref={(el) => { revealRef.current = el; lineRef.current = el; parallaxRef.current = el; ghostRef.current = el }} style={{ background: 'var(--color-bg)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        {/* Ghost text */}
        <div className="ghost-text" style={{ top: '-8%', right: '-5%' }}>EVENTS</div>

        {/* Section label */}
        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)', textAlign: 'right' }}>[ 02 — Prossimo Evento ]</div>

        {/* Giant overlapping title */}
        <div className="reveal-up" style={{ position: 'relative', zIndex: 2, marginBottom: '-4vw', textAlign: 'right' }}>
          <h2 className="t-display" style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: '0.85' }}>
            {nextEvent.name}
          </h2>
        </div>

        {/* Grid: image left, info right */}
        <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)', alignItems: 'start' }}>

          {/* Left: Image — 4:5 ratio, span 6 cols, offset right */}
          <div style={{ gridColumn: '2 / span 6', position: 'relative', zIndex: 1 }}>
            <div className="reveal-up relative overflow-hidden" style={{ aspectRatio: '4 / 5', maxHeight: '580px' }}>
              <img
                src={eventImg}
                alt={nextEvent.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.75) contrast(1.1)',
                }}
                className="parallax-img"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,10,0.5) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 'clamp(0.75rem, 2vw, 1.5rem)', left: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                <span className="t-label" style={{ color: 'var(--color-white-60)' }}>Flagship Event</span>
              </div>
            </div>
          </div>

          {/* Right: Event info */}
          <div style={{ gridColumn: '9 / -1' }}>

            <span className="reveal-up t-label" style={{ display: 'block', marginBottom: '0.75rem' }}>{nextEvent.tagline}</span>

            <div className="reveal-line rule" style={{ maxWidth: '80px', marginBottom: '1.2rem' }} />

            <p className="reveal-up" style={{ color: 'var(--color-white-60)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {nextEvent.desc}
            </p>

            {/* Event details */}
            <div className="reveal-up" style={{ marginBottom: '1.5rem' }}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span style={{ width: '20px', height: '1px', background: 'var(--color-red)' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-white-60)' }}>{formatDate(nextEvent.date)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ width: '20px', height: '1px', background: 'var(--color-red)' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-white-60)' }}>{nextEvent.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ width: '20px', height: '1px', background: 'var(--color-red)' }} />
                  <span className="t-label" style={{ color: 'var(--color-red)' }}>{nextEvent.spots} posti disponibili</span>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="reveal-up" style={{ marginBottom: '2rem' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-red)' }}>Countdown</span>
              <Countdown targetDate={nextEvent.date} />
            </div>

            {/* CTAs */}
            <div className="reveal-up flex flex-wrap gap-4">
              <a href="#contatti" className="btn-solid">Prenota il tuo posto</a>
              <Link to="/eventi" className="btn-editorial">
                Tutti gli eventi
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
