// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  // '' = nada activo (cuando estás en el Hero)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    if (sections.length === 0) return

    // Observer para resaltar según la sección visible
    const observer = new IntersectionObserver(
      (entries) => {
        // Elegimos la entrada con mayor intersección
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          const id = visible.target.getAttribute('id')
          setActiveSection(id || '')
        }
      },
      {
        // Ajusta el margen superior por el header fijo
        root: null,
        rootMargin: '-120px 0px -40% 0px',
        threshold: [0.25, 0.5, 0.6, 0.75],
      }
    )

    sections.forEach((sec) => observer.observe(sec))

    // Extra: cuando estás por encima de #home (en el Hero) => nada activo
    const handleScrollTop = () => {
      const home = document.getElementById('home')
      if (home) {
        const topLimit = home.offsetTop - 140 // altura aprox. del header
        if (window.scrollY < topLimit) {
          setActiveSection('') // Hero → sin highlight
        }
      }
    }

    window.addEventListener('scroll', handleScrollTop, { passive: true })
    handleScrollTop()

    return () => {
      window.removeEventListener('scroll', handleScrollTop)
      observer.disconnect()
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const baseLink =
    'px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00aa66]'

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="GMC Solutions logo" className="h-12" />
        </a>

        {/* Navegación */}
        <nav className="flex gap-2 md:gap-4 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${baseLink} ${
                  isActive
                    ? 'bg-[#00aa66] text-black font-semibold shadow-md'
                    : 'hover:bg-[#00aa66] hover:text-black'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}

          {/* Botón GET A QUOTE → asegúrate de tener <section id="quote"> o apunta a #contact */}
          <a
            href="#quote"
            className="ml-1 md:ml-4 rounded-xl px-4 py-2 font-semibold text-black shadow-md"
            style={{ backgroundColor: '#00aa66' }}
          >
            GET A QUOTE
          </a>
        </nav>
      </div>
    </header>
  )
}
