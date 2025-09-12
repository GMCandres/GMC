const items = [
  {title: 'Kitchens & Pantries', copy: 'Tailored cabinetry, stone benchtops coordination, integrated appliances and on‑site installation.'},
  {title: 'Wardrobes & Storage', copy: 'Walk‑ins, built‑ins, laundries and clever storage to maximise every millimetre.'},
  {title: 'Bathrooms & Vanities', copy: 'Moisture‑resistant materials, flawless finishes, mirrors and shaving cabinets.'},
  {title: 'Commercial Fitouts', copy: 'Reception counters, wall panelling, meeting rooms, staff amenities and compliance.'},
  {title: 'Architectural Joinery', copy: 'Feature walls, acoustic linings, seating, libraries and custom furniture details.'},
  {title: 'Site Install & Project Mgmt', copy: 'Dedicated site foreman, WHS, defect tracking and handover documentation.'},
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-4xl font-semibold">What we do</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          We design, manufacture and install custom joinery for homes and workplaces across Greater Sydney. From one‑off bespoke pieces to full building fitouts.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((s,i)=>(
            <div key={i} className="rounded-2xl border p-6 hover:shadow-sm transition">
              <div className="h-40 rounded-xl bg-slate-100 mb-4" />
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
