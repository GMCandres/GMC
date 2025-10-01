import React, { useState } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Color del logo en HEX
  const logoColor = "#00aa66"

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo más grande */}
        <img
          src={logo}
          alt="GMC Solutions logo"
          className="h-14 w-auto object-contain"
        />

        {/* Menú desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#home" className="hover:text-yellow-400 transition">HOME</a>
          <a href="#about" className="hover:text-yellow-400 transition">ABOUT US</a>
          <a href="#services" className="hover:text-yellow-400 transition">SERVICES</a>
          <a href="#projects" className="hover:text-yellow-400 transition">PROJECTS</a>
          <a href="#contact" className="hover:text-yellow-400 transition">CONTACT</a>
        </nav>

        {/* Botón a la derecha */}
        <a
          href="#quote"
          className="hidden md:inline-block rounded-xl px-4 py-2 font-semibold transition"
          style={{ backgroundColor: logoColor, color: "#ffffff" }}
        >
          GET A QUOTE
        </a>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-4 space-y-3 text-sm font-semibold tracking-wide">
          <a href="#home" className="block hover:text-yellow-400 transition">HOME</a>
          <a href="#about" className="block hover:text-yellow-400 transition">ABOUT US</a>
          <a href="#services" className="block hover:text-yellow-400 transition">SERVICES</a>
          <a href="#projects" className="block hover:text-yellow-400 transition">PROJECTS</a>
          <a href="#contact" className="block hover:text-yellow-400 transition">CONTACT</a>
          <a
            href="#quote"
            className="block rounded-xl px-4 py-2 font-semibold transition"
            style={{ backgroundColor: logoColor, color: "#ffffff" }}
          >
            GET A QUOTE
          </a>
        </div>
      )}
    </header>
  )
}

