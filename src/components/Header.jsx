import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120 // ajuste por el header
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id')
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="GMC Solutions Logo" className="h-12" />
        </div>

        {/* Navegación */}
        <nav className="flex gap-4 items-center">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-xl transition ${
                activeSection === item.id 
                  ? 'bg-[#00aa66] text-black font-semibold shadow-md'
                  : 'hover:bg-[#00aa66] hover:text-black'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Botón especial */}
          <a
            href="#quote"
            className="ml-4 rounded-xl px-4 py-2 font-semibold text-black shadow-md"
            style={{ backgroundColor: '#00aa66' }}
          >
            GET A QUOTE
          </a>
        </nav>
      </div>
    </header>
  )
}
