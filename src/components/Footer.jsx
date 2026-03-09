import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logoelleevents.webp'

const navLinks = [
  { label: 'Chi Siamo', href: '/#chi-siamo' },
  { label: 'Eventi', href: '/eventi', type: 'page' },
  { label: 'The Fleet', href: '/fleet', type: 'page' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contatti', href: '/#contatti' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleHashClick = (e, href) => {
    e.preventDefault()
    const hash = href.replace('/', '')
    if (location.pathname === '/') {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }
  }

  return (
    <footer style={{ background: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-white-06)' }}>
      <div style={{ padding: 'clamp(4rem, 8vw, 7rem) var(--page-margin) clamp(2rem, 4vw, 3rem)' }}>

        {/* Top section: large brand + navigation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--grid-gap)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>

          {/* Brand */}
          <div style={{ gridColumn: '1 / span 5' }}>
            <Link to="/" className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <img src={logo} alt="Elle Events" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <div>
                <span className="t-display" style={{ fontSize: '1rem', display: 'block', lineHeight: '1' }}>Elle Events</span>
                <span className="t-label" style={{ fontSize: '0.4rem' }}>Supercar Society</span>
              </div>
            </Link>
            <p style={{ color: 'var(--color-white-30)', fontSize: '0.75rem', lineHeight: '2', maxWidth: '300px' }}>
              Unconventional events where the dress code is a supercar.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ gridColumn: '7 / span 3' }}>
            <span className="t-label" style={{ fontSize: '0.4rem', display: 'block', marginBottom: '1.5rem' }}>Navigazione</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === 'page' ? (
                    <Link
                      to={link.href}
                      style={{ fontSize: '0.75rem', color: 'var(--color-white-30)', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleHashClick(e, link.href)}
                      style={{ fontSize: '0.75rem', color: 'var(--color-white-30)', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div style={{ gridColumn: '10 / span 3' }}>
            <span className="t-label" style={{ fontSize: '0.4rem', display: 'block', marginBottom: '1.5rem' }}>Social</span>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/_elle_events_/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-white-30)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
              >
                Instagram
              </a>
              <a
                href="https://wa.me/393331234567"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-white-30)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rule" style={{ marginBottom: '1.5rem' }} />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p style={{ fontSize: '0.6rem', color: 'var(--color-white-12)' }}>
            © {new Date().getFullYear()} Elle Events — Supercar Society. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" style={{ fontSize: '0.6rem', color: 'var(--color-white-12)', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-12)'}
            >
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: '0.6rem', color: 'var(--color-white-12)', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-12)'}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
