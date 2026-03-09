import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useLineReveal } from '../hooks/useGsap'
import eventImg1 from '../assets/prossimo evento/prossimo evento-1.webp'
import eventImg2 from '../assets/prossimo evento/prossimo evento-2.webp'
import eventImg3 from '../assets/prossimo evento/prossimo evento-3.webp'
import eventImg4 from '../assets/prossimo evento/prossimo evento-4.webp'
import rentImg1 from '../assets/macchine-rent/macchine-rent-2.webp'
import rentImg2 from '../assets/macchine-rent/macchine-rent-3.webp'
import calendarBg from '../assets/macchine-rent/macchine-rent-7.webp'

const events = [
  {
    name: 'DREAMRIDE',
    tagline: "L'evento flagship",
    desc: "L'esperienza definitiva per supercar. Un tour esclusivo tra le strade più suggestive, culminando in una serata indimenticabile.",
    longDesc: "DREAMRIDE è il cuore pulsante di Elle Events. Un tour esclusivo che attraversa le strade più suggestive del Piemonte, dalle colline delle Langhe fino alla Riviera Ligure. Ogni edizione è un'esperienza irripetibile.",
    image: eventImg1,
    flagship: true,
  },
  { name: 'MOUNTAIN RIDE', tagline: 'Tour delle Alpi', desc: "Passi alpini, tornanti mozzafiato e panorami infiniti. L'adrenalina delle supercar incontra la maestosità delle montagne.", image: eventImg2 },
  { name: 'LANGHE ESCAPE', tagline: 'Enogastronomia & Supercar', desc: "Le colline del Piemonte, vini pregiati e cucina stellata. Un'esperienza che unisce gusto e velocità.", image: eventImg3 },
  { name: 'SUNDAY DREAM', tagline: 'Raduni domenicali', desc: "L'appuntamento rilassato della community. Colazione, supercar e buona compagnia.", image: eventImg4 },
  { name: 'ON THE BEACH', tagline: 'Tour costiero', desc: 'La Riviera Ligure con il rombo dei motori. Strade panoramiche a picco sul mare.', image: rentImg1 },
  { name: 'SPRING RUSH', tagline: 'Tour primaverile', desc: 'Il risveglio della stagione con un tour esclusivo. Le prime giornate di sole.', image: rentImg2 },
]

const upcomingEvents = [
  { name: 'DREAMRIDE', date: '2025-03-22', location: 'Torino — Langhe — Riviera', spots: 12, flagship: true, image: calendarBg },
  { name: 'SUNDAY DREAM', date: '2025-04-06', location: 'Torino e dintorni', spots: 20 },
  { name: 'SPRING RUSH', date: '2025-04-19', location: "Piemonte — Valle d'Aosta", spots: 15 },
  { name: 'LANGHE ESCAPE', date: '2025-05-10', location: 'Langhe — Roero', spots: 10 },
  { name: 'MOUNTAIN RIDE', date: '2025-06-14', location: 'Alpi Piemontesi', spots: 12 },
  { name: 'ON THE BEACH', date: '2025-07-12', location: 'Riviera Ligure', spots: 15 },
]

const eventOptions = [
  'DREAMRIDE — 22 Marzo', 'SUNDAY DREAM — 6 Aprile', 'SPRING RUSH — 19 Aprile',
  'LANGHE ESCAPE — 10 Maggio', 'MOUNTAIN RIDE — 14 Giugno', 'ON THE BEACH — 12 Luglio',
]

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
        <div key={item.label} className="text-center">
          <span className="t-data block" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-white)' }}>
            {String(item.val).padStart(2, '0')}
          </span>
          <span className="t-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function EventsPage() {
  const featured = upcomingEvents[0]
  const [formData, setFormData] = useState({ nome: '', email: '', telefono: '', evento: '', vettura: '', note: '' })
  const [submitted, setSubmitted] = useState(false)
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const inputStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid var(--color-white-12)', padding: '0.75rem 0',
    color: 'var(--color-white)', fontSize: '1.1rem', fontFamily: 'var(--font-body)',
    outline: 'none', transition: 'border-color 0.3s',
  }

  return (
    <div ref={(el) => { revealRef.current = el; lineRef.current = el }} style={{ paddingTop: 'clamp(5rem, 10vh, 8rem)' }}>
      {/* Page hero */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <Link to="/" className="reveal-up btn-editorial" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          Torna alla home
        </Link>
        <div className="reveal-up t-label mb-4" style={{ color: 'var(--color-red)' }}>Experiences</div>
        <h1 className="reveal-up t-display" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1rem' }}>
          I nostri <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>eventi</em>
        </h1>
        <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '650px' }}>
          Ogni evento Elle Events è un'esperienza unica e non convenzionale, pensata per regalare
          emozioni che vanno oltre la guida.
        </p>
      </div>

      {/* Flagship */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        {events.filter(e => e.flagship).map((event) => (
          <div key={event.name} className="reveal-up relative overflow-hidden" style={{ height: 'clamp(350px, 48vh, 520px)' }}>
            <img src={event.image} alt={event.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) contrast(1.15)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.9) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', top: 'clamp(1.2rem, 3vh, 2rem)', left: 'clamp(1.2rem, 3vw, 2rem)' }}>
              <span className="t-label" style={{ color: 'var(--color-red)' }}>Flagship Event</span>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              <span className="t-label" style={{ marginBottom: '0.5rem', display: 'block' }}>{event.tagline}</span>
              <h2 className="t-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '0.75rem' }}>{event.name}</h2>
              <p style={{ color: 'var(--color-white-60)', fontSize: '1.1rem', maxWidth: '550px', lineHeight: '1.8', marginBottom: '1.5rem' }}>{event.longDesc || event.desc}</p>
              <a href="#iscrizione-page" className="btn-solid">Iscriviti ora</a>
            </div>
          </div>
        ))}
      </div>

      {/* Other events — asymmetric grid */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)' }}>
          {events.filter(e => !e.flagship).map((event, i) => (
            <div
              key={event.name}
              className="reveal-up group"
              style={{
                gridColumn: i % 3 === 0 ? '1 / span 7' : i % 3 === 1 ? '8 / span 5' : i % 2 === 0 ? '1 / span 5' : '6 / span 7',
              }}
            >
              <div className="relative overflow-hidden" style={{ height: 'clamp(200px, 30vh, 340px)' }}>
                <img src={event.image} alt={event.name} className="transition-transform duration-700 group-hover:scale-105" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) contrast(1.1)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  <span className="t-label" style={{ marginBottom: '0.4rem', display: 'block' }}>{event.tagline}</span>
                  <h3 className="t-display" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '0.3rem' }}>{event.name}</h3>
                  <p style={{ color: 'var(--color-white-30)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '340px' }}>{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar section */}
      <div style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
        <div style={{ padding: '0 var(--page-margin)' }}>
          <div className="reveal-up t-label mb-8" style={{ color: 'var(--color-red)' }}>Calendario</div>
          <h2 className="reveal-up t-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            Prossimi <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>eventi</em>
          </h2>

          {/* Featured countdown */}
          <div className="reveal-up relative overflow-hidden" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="relative" style={{ height: 'clamp(300px, 42vh, 420px)' }}>
              <img src={featured.image} alt={featured.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) contrast(1.2)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(10,10,10,0.85) 70%)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.5rem' }}>
                <span className="t-label" style={{ color: 'var(--color-red)', marginBottom: '0.75rem' }}>Prossimo Evento</span>
                <h3 className="t-display" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', marginBottom: '0.5rem' }}>{featured.name}</h3>
                <p style={{ color: 'var(--color-white-30)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{formatDate(featured.date)} — {featured.location}</p>
                <p className="t-label" style={{ color: 'var(--color-red)', marginBottom: 'clamp(1rem, 2.5vw, 2rem)' }}>{featured.spots} posti disponibili</p>
                <Countdown targetDate={featured.date} />
                <a href="#iscrizione-page" className="btn-solid" style={{ marginTop: 'clamp(1rem, 2.5vw, 2rem)' }}>Prenota il tuo posto</a>
              </div>
            </div>
          </div>

          {/* Events list */}
          <div className="reveal-line rule" style={{ marginBottom: '0.75rem' }} />
          {upcomingEvents.slice(1).map((event, i) => (
            <div
              key={i}
              className="reveal-up group"
              style={{
                display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
                gap: '1rem', padding: 'clamp(1rem, 2vw, 1.5rem) 0', borderBottom: '1px solid var(--color-white-06)',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-white-06)'}
            >
              <div className="flex items-center gap-4">
                <span className="t-data" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--color-white-12)', minWidth: '3rem' }}>
                  {String(new Date(event.date).getDate()).padStart(2, '0')}
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{event.name}</h4>
                  <p className="t-label">{event.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="t-label">{event.spots} posti disponibili</span>
                <a href="#iscrizione-page" className="t-micro" style={{ color: 'var(--color-red)' }}>Prenota →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration form */}
      <div id="iscrizione-page" style={{ background: 'var(--color-bg)', padding: 'clamp(4rem, 8vh, 6rem) 0' }}>
        <div style={{ padding: '0 var(--page-margin)' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <span className="t-label" style={{ color: 'var(--color-red)', display: 'block', marginBottom: '0.75rem' }}>Iscrizione</span>
            <h2 className="t-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }}>
              Prenota il tuo <em className="t-display-italic">posto</em>
            </h2>
            <p style={{ color: 'var(--color-white-30)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '550px', margin: '0 auto' }}>
              Compila il modulo per richiedere la partecipazione.
            </p>
          </div>

          {submitted ? (
            <div className="reveal-up" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid var(--color-white-06)', textAlign: 'center' }}>
              <span className="t-data" style={{ fontSize: '3.5rem', color: 'var(--color-red)', display: 'block', marginBottom: '0.75rem' }}>✓</span>
              <h3 className="t-display" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Richiesta inviata</h3>
              <p style={{ color: 'var(--color-white-30)', fontSize: '1.1rem' }}>Ti contatteremo presto per confermare la tua partecipazione.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal-up" style={{ border: '1px solid var(--color-white-06)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Nome e Cognome *</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Mario Rossi" style={inputStyle}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'} />
                </div>
                <div>
                  <label className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="mario@email.com" style={inputStyle}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Telefono</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+39 333 1234567" style={inputStyle}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'} />
                </div>
                <div>
                  <label className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Evento *</label>
                  <select name="evento" value={formData.evento} onChange={handleChange} required
                    style={{ ...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\' fill=\'none\'%3E%3Cpath d=\'M3 5L6 8L9 5\' stroke=\'%23666\' stroke-width=\'1.5\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}>
                    <option value="" style={{ background: 'var(--color-bg)' }}>Seleziona evento</option>
                    {eventOptions.map((opt) => (<option key={opt} value={opt} style={{ background: 'var(--color-bg)' }}>{opt}</option>))}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Vettura posseduta</label>
                <input type="text" name="vettura" value={formData.vettura} onChange={handleChange} placeholder="Es. Lamborghini Huracán, Ferrari 488..." style={inputStyle}
                  onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label className="t-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Note</label>
                <textarea name="note" value={formData.note} onChange={handleChange} rows={4} placeholder="Richieste particolari, domande..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'} />
              </div>
              <button type="submit" className="btn-solid" style={{ width: '100%', padding: '1.1rem 2rem' }}>Invia richiesta di partecipazione</button>
              <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-white-12)', marginTop: '0.75rem' }}>I tuoi dati saranno trattati nel rispetto della privacy.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
