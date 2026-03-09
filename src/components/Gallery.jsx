import { useState } from 'react'
import { useReveal, useLineReveal } from '../hooks/useGsap'

import img1 from '../assets/macchine-rent/macchine-rent-1.webp'
import img2 from '../assets/macchine-rent/macchine-rent-2.webp'
import img3 from '../assets/macchine-rent/macchine-rent-3.webp'
import img4 from '../assets/macchine-rent/macchine-rent-4.webp'
import img5 from '../assets/macchine-rent/macchine-rent-5.webp'
import img6 from '../assets/macchine-rent/macchine-rent-6.webp'
import img7 from '../assets/macchine-rent/macchine-rent-7.webp'
import img8 from '../assets/macchine-rent/macchine-rent-8.webp'
import img9 from '../assets/macchine-rent/macchine-rent-9.webp'

const allImages = [
  { src: img1, alt: 'Supercar Elle Events' },
  { src: img2, alt: 'Tour supercar' },
  { src: img3, alt: 'Tour supercar' },
  { src: img4, alt: 'Supercar Elle Events' },
  { src: img5, alt: 'Supercar Elle Events' },
  { src: img6, alt: 'Tour supercar' },
  { src: img7, alt: 'Supercar Elle Events' },
  { src: img8, alt: 'Tour supercar' },
  { src: img9, alt: 'Supercar Elle Events' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')

  return (
    <section id="gallery" ref={(el) => { revealRef.current = el; lineRef.current = el }} style={{ background: 'var(--color-bg)', padding: 'clamp(6rem, 14vh, 10rem) 0' }}>
      <div className="relative" style={{ padding: '0 var(--page-margin)' }}>

        {/* Ghost text */}
        <div className="ghost-text" style={{ bottom: '10%', left: '-5%' }}>GALLERY</div>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div>
            <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>[ 04 — Gallery ]</div>
            <h2 className="reveal-up t-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
              Momenti <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>esclusivi</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/_elle_events_/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-up btn-editorial"
          >
            @_elle_events_
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        <div className="reveal-line rule" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }} />

        {/* Editorial masonry — asymmetric grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4px' }}>
          {allImages.map((img, i) => {
            // Create asymmetric spans
            const spans = [
              { col: '1 / span 5', row: 'span 2' },   // 0: large left
              { col: '6 / span 4', row: 'span 1' },    // 1: medium
              { col: '10 / span 3', row: 'span 1' },   // 2: small
              { col: '6 / span 3', row: 'span 1' },    // 3: small
              { col: '9 / span 4', row: 'span 1' },    // 4: medium
              { col: '1 / span 4', row: 'span 1' },    // 5: medium
              { col: '5 / span 3', row: 'span 1' },    // 6: small
              { col: '8 / span 5', row: 'span 2' },    // 7: large right
              { col: '1 / span 7', row: 'span 1' },    // 8: wide bottom
            ]
            const s = spans[i] || { col: 'span 4', row: 'span 1' }

            return (
              <div
                key={i}
                className="reveal-up group relative overflow-hidden cursor-pointer"
                style={{
                  gridColumn: s.col,
                  gridRow: s.row,
                  height: s.row === 'span 2' ? 'clamp(300px, 45vh, 500px)' : 'clamp(150px, 22vh, 250px)',
                }}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="transition-transform duration-700 group-hover:scale-105"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) contrast(1.1)' }}
                />
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(10,10,10,0)',
                    transition: 'background 0.4s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  className="group-hover:!bg-[rgba(10,10,10,0.4)]"
                >
                  <svg
                    width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
                    style={{ opacity: 0, transition: 'opacity 0.3s', color: 'white' }}
                    className="group-hover:!opacity-100"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 50,
            background: 'rgba(10,10,10,0.97)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'none', border: 'none', color: 'var(--color-white-30)',
              cursor: 'pointer', transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white-30)'}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
