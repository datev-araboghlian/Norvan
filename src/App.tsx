import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import SprayReveal from './components/SprayReveal'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="relative noise-bg">
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <SprayReveal />
        <Services />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
