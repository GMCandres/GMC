// src/components/Hero.jsx
import React from 'react'
import heroImg from '../assets/hero-image.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-[105vh] md:min-h-[110vh] text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      {/* Overlay: oscuro + degradado inferior */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="pt-[22vh] md:pt-[24vh] max-w-4xl">
          {/* Título: solo el claim, sin 'GMC Solutions' visible */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.08] tracking-tight drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)]">
            Commercial and high-end residential joinery
          </h1>

          {/* Acento: línea fina en verde */}
          <div className="mt-5 h-1 w-24 rounded-full" style={{ backgroundColor: '#00aa66' }} />

          {/* Subcopy opcional (puedes quitarlo si prefieres ultra minimal) */}
          {/* <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl">
            Bespoke craftsmanship, premium materials, delivered with precision from concept to completion.
          </p> */}

          {/* Bloque de botones separado del texto (más abajo) */}
          <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gray-900/90 backdrop-blur px-6 py-3 text-white hover:bg-gray-800 transition shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl px-6 py-3 font-semibold text-black shadow-md hover:shadow-lg transition"
              style={{ backgroundColor: '#00aa66' }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll (opcional) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-wider">
        <span className="inline-flex items-center gap-2">
          SCROLL
          <svg width="18" height="18" viewBox="0 0 24 24" className="animate-bounce">
            <path fill="currentColor" d="M12 16l-6-6h12z"/>
          </svg>
        </span>
      </div>
    </section>
  )
}
