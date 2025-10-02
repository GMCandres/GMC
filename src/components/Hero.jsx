// src/components/Hero.jsx
import React from 'react'
import heroImg from '../assets/hero-image.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[110vh] md:min-h-[115vh] text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="pt-[26vh] md:pt-[28vh] max-w-4xl">
          {/* Título en dos líneas */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight">
            <span className="block font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              Commercial and high-end
            </span>
            <span className="block font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              residential joinery
            </span>
          </h1>

          {/* Línea acento */}
          <div className="mt-6 h-1 w-24 rounded-full" style={{ backgroundColor: '#00aa66' }} />

          {/* Botones */}
          <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gray-900/90 backdrop-blur px-7 py-3 text-sm font-semibold tracking-wider uppercase text-white hover:bg-gray-800 transition shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl px-7 py-3 text-sm font-semibold tracking-wider uppercase text-black shadow-md hover:shadow-lg transition"
              style={{ backgroundColor: '#00aa66' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Indicador scroll opcional */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase">
        <span className="inline-flex items-center gap-2">
          Scroll
          <svg width="18" height="18" viewBox="0 0 24 24" className="animate-bounce">
            <path fill="currentColor" d="M12 16l-6-6h12z"/>
          </svg>
        </span>
      </div>
    </section>
  )
}
