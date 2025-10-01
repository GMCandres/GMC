import React from 'react'

export default function Home() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Joinery built for detail, timelines and real-world use</h2>
            <p className="mt-3 text-slate-600">
              We partner with builders, designers and homeowners across Greater Sydney to design, manufacture and install custom joinery that looks great and works hard—day after day.
            </p>
            <ul className="mt-5 space-y-2 text-slate-700 list-disc list-inside">
              <li>Residential & commercial projects</li>
              <li>In-house design, drafting & site installation</li>
              <li>Transparent quoting and milestone updates</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#services" className="rounded-xl bg-gray-900 text-white px-5 py-3 hover:bg-gray-800 transition">Explore Services</a>
              <a href="#projects" className="rounded-xl ring-1 ring-slate-300 px-5 py-3 hover:bg-slate-50 transition">See Projects</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-5">
              <p className="text-3xl font-bold">10+ yrs</p>
              <p className="text-sm text-slate-600 mt-1">Experience across NSW</p>
            </div>
            <div className="rounded-2xl border p-5">
              <p className="text-3xl font-bold">On-time</p>
              <p className="text-sm text-slate-600 mt-1">Program & site coordination</p>
            </div>
            <div className="rounded-2xl border p-5">
              <p className="text-3xl font-bold">Detail-first</p>
              <p className="text-sm text-slate-600 mt-1">CAD, cutting lists & QA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
