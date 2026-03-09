import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useReveal, useLineReveal } from '../hooks/useGsap'

// Wireframe imports
import wireHuracan from '../assets/wireframes-inverted/huracan.webp'
import wire812 from '../assets/wireframes-inverted/812-superfast.webp'
import wireUrus from '../assets/wireframes-inverted/urus.webp'
import wireAmgGt from '../assets/wireframes-inverted/amg-gt.webp'
import wireG63 from '../assets/wireframes-inverted/g63.webp'
import wireR8 from '../assets/wireframes-inverted/r8.webp'
import wireRs3 from '../assets/wireframes-inverted/rs3.webp'

// Photo imports
import rentImg1 from '../assets/macchine-rent/macchine-rent-1.webp'
import rentImg2 from '../assets/macchine-rent/macchine-rent-2.webp'
import rentImg3 from '../assets/macchine-rent/macchine-rent-3.webp'
import rentImg4 from '../assets/macchine-rent/macchine-rent-4.webp'
import rentImg5 from '../assets/macchine-rent/macchine-rent-5.webp'
import rentImg6 from '../assets/macchine-rent/macchine-rent-6.webp'

const carsData = {
  'huracan-tecnica': {
    brand: 'Lamborghini',
    model: 'Huracán Tecnica',
    hp: '640',
    engine: 'V10 aspirato',
    displacement: '5.204 cc',
    torque: '565 Nm',
    speed0to100: '3.2 sec',
    topSpeed: '325 km/h',
    transmission: 'DCT 7 rapporti',
    drive: 'Posteriore (RWD)',
    weight: '1.379 kg',
    desc: "La Huracán Tecnica rappresenta l'equilibrio perfetto tra prestazioni da pista e piacere di guida stradale. Il V10 aspirato da 640 CV, abbinato alla trazione posteriore, offre un'esperienza di guida pura e coinvolgente.",
    wireframe: wireHuracan,
    wireframeVertical: true,
    photo: rentImg6,
  },
  '812-superfast': {
    brand: 'Ferrari',
    model: '812 Superfast',
    hp: '800',
    engine: 'V12 aspirato | Scarico Novitec',
    displacement: '6.496 cc',
    torque: '718 Nm',
    speed0to100: '2.9 sec',
    topSpeed: '340 km/h',
    transmission: 'DCT 7 rapporti',
    drive: 'Posteriore (RWD)',
    weight: '1.525 kg',
    desc: "La 812 Superfast è la GT V12 per eccellenza. Con il motore V12 aspirato più potente mai prodotto da Ferrari e lo scarico Novitec, ogni accelerata è un'esperienza sensoriale totale.",
    wireframe: wire812,
    wireframeVertical: false,
    photo: rentImg2,
  },
  'urus-performante': {
    brand: 'Lamborghini',
    model: 'Urus Performante',
    hp: '666',
    engine: 'V8 Biturbo | Scarico Akrapovič',
    displacement: '3.996 cc',
    torque: '850 Nm',
    speed0to100: '3.3 sec',
    topSpeed: '306 km/h',
    transmission: 'Automatico 8 rapporti',
    drive: 'Integrale (AWD)',
    weight: '2.150 kg',
    desc: "L'Urus Performante è il Super SUV nella sua forma più estrema. Con 666 CV, scarico Akrapovič e assetto ribassato, combina il comfort di un SUV con le prestazioni di una supercar.",
    wireframe: wireUrus,
    wireframeVertical: false,
    photo: rentImg3,
  },
  'amg-gt-tiffany': {
    brand: 'Mercedes-AMG',
    model: 'GT "Tiffany"',
    hp: '585',
    engine: 'V8 Biturbo',
    displacement: '3.982 cc',
    torque: '700 Nm',
    speed0to100: '3.5 sec',
    topSpeed: '311 km/h',
    transmission: 'DCT 7 rapporti',
    drive: 'Posteriore (RWD)',
    weight: '1.615 kg',
    desc: "La AMG GT in edizione speciale \"Tiffany\" è una delle GT più raffinate del mondo. Il V8 biturbo da 585 CV regala una potenza brutale in un corpo elegantissimo.",
    wireframe: wireAmgGt,
    wireframeVertical: true,
    photo: rentImg4,
  },
  'g63-grand-edition': {
    brand: 'Mercedes-Benz',
    model: 'G63 AMG Grand Edition',
    hp: '585',
    engine: 'V8 Biturbo | 1/1000',
    displacement: '3.982 cc',
    torque: '850 Nm',
    speed0to100: '4.5 sec',
    topSpeed: '220 km/h',
    transmission: 'Automatico 9 rapporti',
    drive: 'Integrale (AWD)',
    weight: '2.560 kg',
    desc: "Il G63 AMG Grand Edition è un'icona senza tempo in versione limitata 1 su 1000. Il V8 biturbo da 585 CV in un corpo leggendario — lusso e potenza allo stato puro.",
    wireframe: wireG63,
    wireframeVertical: false,
    photo: rentImg5,
  },
  'r8-v10-performance': {
    brand: 'Audi',
    model: 'R8 V10 Performance',
    hp: '620',
    engine: 'V10 aspirato',
    displacement: '5.204 cc',
    torque: '580 Nm',
    speed0to100: '3.1 sec',
    topSpeed: '331 km/h',
    transmission: 'S tronic 7 rapporti',
    drive: 'Integrale (AWD)',
    weight: '1.680 kg',
    desc: "L'Audi R8 V10 Performance è la supercar di Ingolstadt nella sua forma definitiva. Il V10 aspirato condiviso con la Huracán, il sistema quattro e un design iconico la rendono unica.",
    wireframe: wireR8,
    wireframeVertical: false,
    photo: rentImg1,
  },
  'rs3-2025': {
    brand: 'Audi',
    model: 'RS3 MY 2025',
    hp: '400',
    engine: '5 cilindri turbo',
    displacement: '2.480 cc',
    torque: '500 Nm',
    speed0to100: '3.8 sec',
    topSpeed: '290 km/h',
    transmission: 'S tronic 7 rapporti',
    drive: 'Integrale (AWD)',
    weight: '1.570 kg',
    desc: "La RS3 MY 2025 è la compatta più potente del segmento. Il leggendario 5 cilindri turbo da 400 CV con il suo sound inconfondibile — adrenalina concentrata in un formato compatto.",
    wireframe: wireRs3,
    wireframeVertical: true,
    photo: rentImg1,
  },
}

export default function CarPage() {
  const { slug } = useParams()
  const revealRef = useReveal('.reveal-up')
  const lineRef = useLineReveal('.reveal-line')

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const car = carsData[slug]
  if (!car) return <Navigate to="/fleet" replace />

  const specs = [
    { label: 'Potenza', value: `${car.hp} CV` },
    { label: 'Motore', value: car.engine },
    { label: 'Cilindrata', value: car.displacement },
    { label: 'Coppia', value: car.torque },
    { label: '0-100 km/h', value: car.speed0to100 },
    { label: 'Velocità max', value: car.topSpeed },
    { label: 'Trasmissione', value: car.transmission },
    { label: 'Trazione', value: car.drive },
    { label: 'Peso', value: car.weight },
  ]

  return (
    <div ref={(el) => { revealRef.current = el; lineRef.current = el }} style={{ paddingTop: 'clamp(5rem, 10vh, 8rem)' }}>

      {/* Header */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <Link to="/fleet" className="reveal-up btn-editorial" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          Torna alla flotta
        </Link>

        <div className="reveal-up t-label mb-4" style={{ color: 'var(--color-red)' }}>{car.brand}</div>

        {/* Giant title */}
        <h1 className="reveal-up t-display" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: '0.9', marginBottom: '1rem' }}>
          {car.model}
        </h1>

        {/* HP hero number */}
        <div className="reveal-up flex items-end gap-6" style={{ marginBottom: '1.5rem' }}>
          <div>
            <span className="t-data" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'var(--color-red)', lineHeight: '0.85', display: 'block' }}>{car.hp}</span>
            <span className="t-label">Cavalli</span>
          </div>
          <div>
            <span className="t-data" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-white-12)', lineHeight: '0.85', display: 'block' }}>{car.speed0to100}</span>
            <span className="t-label">0-100 km/h</span>
          </div>
          <div>
            <span className="t-data" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-white-12)', lineHeight: '0.85', display: 'block' }}>{car.topSpeed.replace(' km/h', '')}</span>
            <span className="t-label">km/h max</span>
          </div>
        </div>

        <div className="reveal-line rule" style={{ marginBottom: '1.5rem' }} />

        <p className="reveal-up" style={{ color: 'var(--color-white-60)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '700px' }}>
          {car.desc}
        </p>
      </div>

      {/* Wireframe blueprint section — full-width horizontal */}
      <div style={{ background: 'var(--color-bg-elevated)', padding: 'clamp(3rem, 6vw, 5rem) 0', overflow: 'hidden' }}>
        <div style={{ padding: '0 var(--page-margin)' }}>
          <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>Blueprint</div>
        </div>

        <div className="reveal-up" style={{ position: 'relative', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <img
            src={car.wireframe}
            alt={`${car.brand} ${car.model} wireframe blueprint`}
            style={{
              width: '100%',
              maxHeight: car.wireframeVertical ? 'none' : '85vh',
              objectFit: 'contain',
              ...(car.wireframeVertical
                ? { transform: 'rotate(90deg) scale(1.15)', transformOrigin: 'center center', margin: 'clamp(-2rem, -4vw, -4rem) 0' }
                : { transform: 'scale(1.05)', transformOrigin: 'center center' }
              ),
            }}
          />
        </div>
      </div>

      {/* Specs grid */}
      <div style={{ padding: 'clamp(3rem, 6vw, 5rem) var(--page-margin)' }}>
        <div className="reveal-up t-label mb-6" style={{ color: 'var(--color-red)' }}>Specifiche Tecniche</div>

        <div className="reveal-line rule" style={{ marginBottom: '0' }} />

        {specs.map((spec, i) => (
          <div
            key={i}
            className="reveal-up"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'clamp(1rem, 2vw, 1.5rem) 0',
              borderBottom: '1px solid var(--color-white-06)',
            }}
          >
            <span className="t-label" style={{ color: 'var(--color-white-30)' }}>{spec.label}</span>
            <span style={{ fontSize: '1.2rem', color: 'var(--color-white)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Photo section */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="reveal-up" style={{ overflow: 'hidden' }}>
          <img
            src={car.photo}
            alt={`${car.brand} ${car.model}`}
            style={{
              width: '100%',
              height: 'clamp(300px, 45vh, 500px)',
              objectFit: 'cover',
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          />
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '0 var(--page-margin)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="reveal-up" style={{
          border: '1px solid var(--color-white-06)',
          padding: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
        }}>
          <h3 className="t-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            Vuoi guidare questa <em className="t-display-italic" style={{ color: 'var(--color-red)' }}>supercar</em>?
          </h3>
          <p style={{ color: 'var(--color-white-30)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            Noleggiala per partecipare ai nostri eventi oppure contattaci per informazioni.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#contatti" className="btn-solid">Prenota ora</a>
            <Link to="/fleet" className="btn-editorial">
              Vedi tutta la flotta
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
