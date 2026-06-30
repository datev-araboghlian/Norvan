import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Everything below the fold is code-split so the hero paints fast on mobile.
const ScrollProgress = lazy(() => import('./components/ScrollProgress'))
const Marquee = lazy(() => import('./components/Marquee'))
const SprayReveal = lazy(() => import('./components/SprayReveal'))
const Services = lazy(() => import('./components/Services'))
const Process = lazy(() => import('./components/Process'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="relative noise-bg">
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Marquee />
          <SprayReveal />
          <Services />
          <Process />
          <Projects />
          <About />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
