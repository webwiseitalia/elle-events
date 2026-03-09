import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logoelleevents.webp'

const navLinks = [
  { label: 'About', href: '/#chi-siamo', type: 'hash' },
  { label: 'Events', href: '/eventi', type: 'page' },
  { label: 'Fleet', href: '/fleet', type: 'page' },
  { label: 'Gallery', href: '/#gallery', type: 'hash' },
  { label: 'Contact', href: '/#contatti', type: 'hash' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  const handleHashClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const hash = href.replace('/', '')
    if (location.pathname === '/') {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-surface/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{ padding: scrolled ? '0.75rem 0' : '1.5rem 0' }}
    >
      <div className="flex items-center justify-between" style={{ padding: '0 var(--page-margin)' }}>
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Elle Events" className="w-8 h-8 rounded-full" />
          <span className="t-label" style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: 'var(--color-white-60)' }}>
            Elle Events
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(link =>
            link.type === 'page' ? (
              <Link key={link.href} to={link.href} className="t-micro transition-colors duration-300 hover:text-white" style={{ fontSize: '0.6rem', color: location.pathname === link.href ? 'var(--color-white)' : undefined }}>{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} onClick={(e) => handleHashClick(e, link.href)} className="t-micro transition-colors duration-300 hover:text-white" style={{ fontSize: '0.6rem' }}>{link.label}</a>
            )
          )}
          <Link to="/eventi" className="btn-solid" style={{ padding: '0.6rem 1.5rem' }}>Join</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 w-7" aria-label="Menu">
          <span className={`block h-[1px] bg-white transition-all duration-500 ${mobileOpen ? 'rotate-45 translate-y-[4px] w-5' : 'w-7'}`} />
          <span className={`block h-[1px] bg-white transition-all duration-500 ${mobileOpen ? '-rotate-45 -translate-y-[3px] w-5' : 'w-4'}`} />
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-surface transition-all duration-700 flex flex-col justify-end p-10 pb-20 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 t-micro" style={{ fontSize: '0.6rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Close</button>
        <div className="space-y-4">
          {navLinks.map(link =>
            link.type === 'page' ? (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="block t-display text-3xl text-white/80 hover:text-white transition-colors">{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} onClick={(e) => handleHashClick(e, link.href)} className="block t-display text-3xl text-white/80 hover:text-white transition-colors">{link.label}</a>
            )
          )}
        </div>
        <div className="rule mt-8 mb-6" style={{ opacity: 0.1 }} />
        <Link to="/eventi" onClick={() => setMobileOpen(false)} className="btn-solid self-start">Join the Society</Link>
      </div>
    </nav>
  )
}
