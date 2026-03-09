import { useMarquee } from '../hooks/useGsap'

export default function Marquee({ text = 'ELLE EVENTS', separator = '✦', speed = 40 }) {
  const marqueeRef = useMarquee('.marquee-track', speed)

  const items = Array(8).fill(null)

  return (
    <div
      ref={marqueeRef}
      className="marquee-track"
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: 'clamp(1.5rem, 3vh, 2.5rem) 0',
        borderTop: '1px solid var(--color-white-06)',
        borderBottom: '1px solid var(--color-white-06)',
        background: 'var(--color-bg)',
      }}
    >
      <div className="marquee-inner" style={{ display: 'inline-flex', alignItems: 'center' }}>
        {items.map((_, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(1.5rem, 3vw, 3rem)' }}>
            <span
              className="t-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                color: i % 2 === 0 ? 'var(--color-white-12)' : 'transparent',
                WebkitTextStroke: i % 2 === 0 ? 'none' : '1px var(--color-white-12)',
                letterSpacing: '-0.02em',
                paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
              }}
            >
              {text}
            </span>
            <span style={{ color: 'var(--color-red)', fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)', opacity: 0.6, paddingRight: 'clamp(1.5rem, 3vw, 3rem)' }}>
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
