export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-72 rounded-2xl bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold">About GMC Solutions</h2>
          <p className="mt-3 text-slate-600">We’re a Sydney joinery and carpentry team delivering detail‑driven work for builders, designers and homeowners. Our edge is hands‑on project management: the same people who price and draw your job also oversee manufacture and installation, so nothing gets lost in translation.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
            <li>Residential & commercial — from apartments to corporate fitouts</li>
            <li>In‑house design, drafting and cutting list preparation</li>
            <li>Dedicated site team, SWMS & WHS compliance</li>
            <li>Transparent timelines and progress updates</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
