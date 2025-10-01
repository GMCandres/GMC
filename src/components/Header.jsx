import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="GMC Solutions logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-semibold text-lg">GMC Solutions</span>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
          <a
            href="#quote"
            className="rounded-xl bg-yellow-500 text-gray-900 px-4 py-2 font-medium hover:bg-yellow-400 transition"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
