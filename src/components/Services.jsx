// src/components/Services.jsx
import { useEffect, useState, useCallback } from "react"

// Thumbnails (imagen principal de cada card)
import imgArchitectural from "../assets/services/architectural-joinery.jpg"
import imgCommercial from "../assets/services/commercial-fitouts.jpg"
import imgSiteInstall from "../assets/services/site-install.jpg"
import imgKitchens from "../assets/services/kitchens-pantries.jpg"
import imgWardrobes from "../assets/services/wardrobes-storage.jpg"
import imgBathrooms from "../assets/services/bathrooms-vanities.jpg"

// Galerías (3 imágenes por servicio)
import arch1 from "../assets/services/architectural/arch-1.jpg"
import arch2 from "../assets/services/architectural/arch-2.jpg"
import arch3 from "../assets/services/architectural/arch-3.jpg"

import com1 from "../assets/services/commercial/com-1.jpg"
import com2 from "../assets/services/commercial/com-2.jpg"
import com3 from "../assets/services/commercial/com-3.jpg"

import site1 from "../assets/services/site-install/site-1.jpg"
import site2 from "../assets/services/site-install/site-2.jpg"
import site3 from "../assets/services/site-install/site-3.jpg"

import kp1 from "../assets/services/kitchens/kp-1.jpg"
import kp2 from "../assets/services/kitchens/kp-2.jpg"
import kp3 from "../assets/services/kitchens/kp-3.jpg"

import ws1 from "../assets/services/wardrobes/ws-1.jpg"
import ws2 from "../assets/services/wardrobes/ws-2.jpg"
import ws3 from "../assets/services/wardrobes/ws-3.jpg"

import bv1 from "../assets/services/bathrooms/bv-1.jpg"
import bv2 from "../assets/services/bathrooms/bv-2.jpg"
import bv3 from "../assets/services/bathrooms/bv-3.jpg"

const SERVICES = [
  {
    id: "architectural-joinery",
    title: "Architectural Joinery",
    thumb: imgArchitectural,
    desc:
      "Bespoke architectural elements with premium materials and precision detailing across residential and commercial spaces.",
    gallery: [arch1, arch2, arch3],
  },
  {
    id: "commercial-fitouts",
    title: "Commercial Fitouts",
    thumb: imgCommercial,
    desc:
      "End-to-end fitouts for offices, clinics and retail: efficient layouts, durable finishes, and clean execution.",
    gallery: [com1, com2, com3],
  },
  {
    id: "site-install-project-mgmt",
    title: "Site Install & Project Management",
    thumb: imgSiteInstall,
    desc:
      "Coordination, site install, and project management to deliver on time, to spec, with safety and quality controls.",
    gallery: [site1, site2, site3],
  },
  {
    id: "kitchens-pantries",
    title: "Kitchens & Pantries",
    thumb: imgKitchens,
    desc:
      "Tailored kitchen systems and pantries that combine function, flow and a timeless aesthetic.",
    gallery: [kp1, kp2, kp3],
  },
  {
    id: "wardrobes-storage",
    title: "Wardrobes & Storage",
    thumb: imgWardrobes,
    desc:
      "Smart storage and built-ins made-to-measure, maximizing space with a clean, integrated look.",
    gallery: [ws1, ws2, ws3],
  },
  {
    id: "bathrooms-vanities",
    title: "Bathrooms & Vanities",
    thumb: imgBathrooms,
    desc:
      "Moisture-ready finishes and refined lines for vanities and bathroom cabinetry built to last.",
    gallery: [bv1, bv2, bv3],
  },
]

export default function Services() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [idx, setIdx] = useState(0)

  const handleOpen = (service) => {
    setActive(service)
    setIdx(0)
    setOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleClose = useCallback(() => {
    setOpen(false)
    setActive(null)
    setIdx(0)
    document.body.style.overflow = ""
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose()
      if (!active || !active.gallery?.length) return
      if (e.key === "ArrowRight") setIdx((v) => (v + 1) % active.gallery.length)
      if (e.key === "ArrowLeft") setIdx((v) => (v - 1 + active.gallery.length) % active.gallery.length)
    }
    window.addEventListener("keydown", onKey, { passive: true })
    return () => window.removeEventListener("keydown", onKey)
  }, [active, handleClose])

  return (
    <section className="py-20" style={{ backgroundColor: "#0b0f14" }}>
      <div className="max-w-7xl mx-auto px-4">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-gray-300 max-w-3xl">
            Custom joinery and fitouts — from concept to completion — aligned with your brief, budget and timeline.
          </p>
        </header>

        {/* Grid de servicios */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => handleOpen(s)}
              className="group text-left rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 hover:bg-slate-900 transition shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-800">
                <img
                  src={s.thumb}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                <div
                  className="mt-4 inline-block rounded-xl px-3 py-2 text-sm font-semibold text-black"
                  style={{ backgroundColor: "#00aa66" }}
                >
                  View details
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 w-[95vw] max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h3 className="text-xl font-bold">{active.title}</h3>
              <button onClick={handleClose} className="text-xl">✕</button>
            </div>
            <div className="relative bg-black">
              {active.gallery?.length ? (
                <img
                  src={active.gallery[idx]}
                  alt={`${active.title} ${idx + 1}`}
                  className="w-full max-h-[60vh] object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-[40vh] text-gray-500">
                  No images yet.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
