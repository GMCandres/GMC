export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582588724789-989cf3c742bc?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-40 text-white">
        <h1 className="text-3xl md:text-6xl font-semibold max-w-3xl leading-tight">
          Precision joinery and commercial fitouts, built in Sydney.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
          Kitchens, wardrobes, bespoke furniture, reception counters, wall panelling, and end‑to‑end site installation for residential and commercial projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#quote" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium">Request a Quote</a>
          <a href="#projects" className="rounded-xl ring-1 ring-white/60 text-white px-5 py-3 font-medium hover:bg-white/10">View Projects</a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl text-sm text-white/80">
          <div className="rounded-xl bg-white/10 p-4">In‑house design & CAD</div>
          <div className="rounded-xl bg-white/10 p-4">Install team & site foreman</div>
          <div className="rounded-xl bg-white/10 p-4">Australian standards & WHS</div>
          <div className="rounded-xl bg-white/10 p-4">On‑time, on‑budget delivery</div>
        </div>
      </div>
    </section>
  )
}
