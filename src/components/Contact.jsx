import { useState } from 'react'
import { useReveal, useLineReveal } from '../hooks/useGsap'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })
  const [sent, setSent] = useState(false)
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contatti" ref={(el) => { revealRef.current = el; lineRef.current = el }} style={{ background: 'var(--color-bg)', padding: 'clamp(6rem, 14vh, 10rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        <div className="ghost-text" style={{ top: '-5%', right: '-8%' }}>CONTACT</div>

        <div className="reveal-up t-label mb-12" style={{ color: 'var(--color-red)' }}>[ 06 — Contatti ]</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)' }}>

          {/* Left: Contact info */}
          <div style={{ gridColumn: '1 / span 5' }} className="col-span-12 lg:col-span-5">
            <h2 className="reveal-up t-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
              Resta in <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>contatto</em>
            </h2>
            <p className="reveal-up" style={{ color: 'var(--color-white-30)', fontSize: '0.8rem', lineHeight: '2', maxWidth: '400px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              Hai domande, vuoi partecipare a un evento o proporre una partnership?
              Scrivici e ti risponderemo al più presto.
            </p>

            <div className="reveal-line rule" style={{ maxWidth: '80px', marginBottom: '2rem' }} />

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'info@ellegroup-events.com', href: 'mailto:info@ellegroup-events.com' },
                { label: 'WhatsApp', value: 'Scrivici su WhatsApp', href: 'https://wa.me/393331234567' },
                { label: 'Instagram', value: '@_elle_events_', href: 'https://www.instagram.com/_elle_events_/' },
                { label: 'Location', value: 'Torino, Piemonte — Nord Italia', href: null },
              ].map((item, i) => (
                <div key={i} className="reveal-up">
                  <span className="t-label" style={{ fontSize: '0.45rem', display: 'block', marginBottom: '0.3rem' }}>{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ fontSize: '0.85rem', color: 'var(--color-white-60)', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-red)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-60)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-white-60)' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ gridColumn: '7 / -1' }} className="col-span-12 lg:col-span-6 lg:col-start-7">
            {sent ? (
              <div className="reveal-up" style={{ padding: 'clamp(3rem, 6vw, 5rem)', border: '1px solid var(--color-white-06)', textAlign: 'center' }}>
                <span className="t-data" style={{ fontSize: '3rem', color: 'var(--color-red)', display: 'block', marginBottom: '1rem' }}>✓</span>
                <h3 className="t-display" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Messaggio inviato</h3>
                <p style={{ color: 'var(--color-white-30)', fontSize: '0.8rem' }}>Ti risponderemo il prima possibile.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reveal-up" style={{ border: '1px solid var(--color-white-06)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label className="t-label" style={{ fontSize: '0.45rem', display: 'block', marginBottom: '0.6rem' }}>Nome *</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      required
                      placeholder="Il tuo nome"
                      style={{
                        width: '100%', background: 'transparent', border: 'none',
                        borderBottom: '1px solid var(--color-white-12)', padding: '0.75rem 0',
                        color: 'var(--color-white)', fontSize: '0.8rem', fontFamily: 'var(--font-body)',
                        outline: 'none', transition: 'border-color 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'}
                    />
                  </div>
                  <div>
                    <label className="t-label" style={{ fontSize: '0.45rem', display: 'block', marginBottom: '0.6rem' }}>Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="La tua email"
                      style={{
                        width: '100%', background: 'transparent', border: 'none',
                        borderBottom: '1px solid var(--color-white-12)', padding: '0.75rem 0',
                        color: 'var(--color-white)', fontSize: '0.8rem', fontFamily: 'var(--font-body)',
                        outline: 'none', transition: 'border-color 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label className="t-label" style={{ fontSize: '0.45rem', display: 'block', marginBottom: '0.6rem' }}>Messaggio *</label>
                  <textarea
                    value={form.messaggio}
                    onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    required
                    rows={5}
                    placeholder="Come possiamo aiutarti?"
                    style={{
                      width: '100%', background: 'transparent', border: 'none',
                      borderBottom: '1px solid var(--color-white-12)', padding: '0.75rem 0',
                      color: 'var(--color-white)', fontSize: '0.8rem', fontFamily: 'var(--font-body)',
                      outline: 'none', resize: 'none', transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-red)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-white-12)'}
                  />
                </div>
                <button type="submit" className="btn-solid" style={{ width: '100%', padding: '1rem 2rem' }}>
                  Invia messaggio
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
