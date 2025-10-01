// src/App.jsx
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import AboutUs from './components/AboutUs.jsx' // ojo: .jsx para evitar problemas en build
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* HERO → no lleva id para que ningún link esté resaltado arriba */}
      <Hero />

      {/* HOME → ahora con id="home" */}
      <section id="home">
        <Home />
      </section>

      {/* ABOUT US → con id="about" */}
      <section id="about">
        <AboutUs />
      </section>

      {/* QUITADO TrustBar */}
      {/* <TrustBar /> */}

      <Services />
      <Projects />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
