import React from 'react'

// Por ahora usamos una URL pública en lugar de la imagen local
const heroImg = 'https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1600&auto=format&fit=crop'

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <img
        src={heroImg}
        alt="Joinery craftsmanship"
        className="w-full h-[85vh] object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          GMC Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-lg">
          Commercial and high-end residential joinery
        </p>
        <div className="flex gap-3">
          <a
            href="#contact"
            className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
          >
            Get a Free Quote
          </a>
          <a
            href="#projects"
            className="border border-white/30 rounded-lg px-5 py-3 hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
