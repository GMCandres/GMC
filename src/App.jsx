import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      {/* Nueva sección Home (resumen) */}
      <Home />
      <TrustBar />
      <Services />
      <Projects />
      <Process />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
