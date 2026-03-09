import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EventsSection from './components/EventsSection'
import FleetSection from './components/FleetSection'
import Partners from './components/Partners'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import EventsPage from './pages/EventsPage'
import FleetPage from './pages/FleetPage'
import CarPage from './pages/CarPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee text="ELLE EVENTS" separator="✦" />
      <About />
      <EventsSection />
      <Marquee text="SUPERCAR SOCIETY" separator="—" speed={50} />
      <FleetSection />
      <Partners />
      <Gallery />
      <Marquee text="UNCONVENTIONAL" separator="✦" speed={35} />
      <Contact />
    </>
  )
}

function App() {
  return (
    <SmoothScroll>
      <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
        <CustomCursor />
        <div className="grain-overlay" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eventi" element={<EventsPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/fleet/:slug" element={<CarPage />} />
        </Routes>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
