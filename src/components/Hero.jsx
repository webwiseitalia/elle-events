import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGhostParallax } from '../hooks/useGsap'
import logo from '../assets/logoelleevents.webp'
import heroBg from '../assets/macchine-rent/macchine-rent-6.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const ghostRef = useGhostParallax('.ghost-text')

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic zoom-out reveal on the hero image
      gsap.fromTo(imgRef.current,
        { scale: 1.35, filter: 'brightness(0.2) contrast(1.15)' },
        { scale: 1.05, filter: 'brightness(0.5) contrast(1.15)', duration: 2.5, ease: 'power2.out' }
      )

      // Parallax on scroll
      gsap.to(imgRef.current, {
        y: 120, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      // Content reveals with stagger
      gsap.fromTo('.hero-reveal', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: 'power3.out', delay: 0.6 })
      gsap.fromTo('.hero-line', { width: '0%' }, { width: '100%', duration: 1.8, ease: 'expo.inOut', delay: 1.2 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={(el) => { sectionRef.current = el; ghostRef.current = el }} className="relative min-h-screen overflow-hidden flex flex-col justify-end" style={{ background: 'var(--color-bg)' }}>
      <div className="ghost-text" style={{ top: '15%', right: '-5%' }}>ELLE</div>

      <div className="absolute inset-0 overflow-hidden">
        <img ref={imgRef} src={heroBg} alt="" className="w-full h-[120%] object-cover" style={{ transform: 'scale(1.05)', filter: 'brightness(0.5) contrast(1.15)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(10,10,10,0.85) 70%, #000000 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[40%]" style={{ background: 'linear-gradient(to top, #000000, transparent)' }} />
      </div>

      <div className="relative z-10" style={{ padding: '0 var(--page-margin)', paddingBottom: 'clamp(3rem, 8vh, 6rem)' }}>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between" style={{ padding: 'clamp(6rem, 12vh, 10rem) var(--page-margin) 0' }}>
          <div className="hero-reveal">
            <img src={logo} alt="Elle Events" className="w-14 h-14 md:w-16 md:h-16 rounded-full" style={{ opacity: 0.9 }} />
          </div>
          <div className="hero-reveal t-micro hidden md:block">↓ [ Scroll ]</div>
        </div>

        <div>
          <div className="hero-reveal t-label mb-4" style={{ color: 'var(--color-red)' }}>Supercar Society — Torino, IT</div>
          <h1 className="hero-reveal t-display" style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', marginBottom: '0.5em' }}>
            <span style={{ display: 'block' }}>Unconventional</span>
            <span style={{ display: 'block' }}><em className="t-display-italic" style={{ fontSize: '0.85em' }}>events</em></span>
          </h1>
          <div className="hero-line rule" style={{ marginBottom: '1.5rem' }} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="hero-reveal" style={{ maxWidth: '520px', color: 'var(--color-white-60)', fontSize: '1.2rem', lineHeight: '1.8' }}>
              Where the dress code is a supercar. Esperienze esclusive dove il lusso si fonde con l'adrenalina pura.
            </p>
            <div className="hero-reveal">
              <a href="#eventi" className="btn-editorial">
                Scopri gli eventi
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
