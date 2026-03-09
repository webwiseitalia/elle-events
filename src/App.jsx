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
import EventsPage from './pages/EventsPage'
import FleetPage from './pages/FleetPage'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <EventsSection />
      <FleetSection />
      <Partners />
      <Gallery />
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
        </Routes>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
