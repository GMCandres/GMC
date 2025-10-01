import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import AboutUs from './components/AboutUs'
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
      <AboutUs />
      <TrustBar />
      <Services />
      <Projects />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
