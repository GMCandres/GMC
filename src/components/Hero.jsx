import React from 'react'
import heroImg from '../assets/hero-image.jpg'

export default function Hero() {
  const logoColor = "#00aa66"
  const logoColorHover = "#00cc77"

  return (
    <section id="home" className="relative min-h-[75vh] md:min-h-[85vh] text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg px-6 py-6 md:px-10 md:py-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-sm">
              GMC Solutions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Commercial and high-end residential joinery
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="rounded-xl px-6 py-3 font-semibold transition"
                style={{ backgroundColor: logoColor, color: "#000000" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = logoColorHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = logoColor)}
              >
                Get a Free Quote
              </a>
              <a
                href="#projects"
                className="rounded-xl bg-gray-900 text-white px-5 py-3 hover:bg-gray-800 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
