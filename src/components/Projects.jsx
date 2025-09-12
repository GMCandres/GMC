function Card({img}){
  return (
    <article className="group rounded-2xl overflow-hidden border bg-white">
      <div className={`h-48 bg-[url('${img}')] bg-cover bg-center group-hover:scale-[1.02] transition`} />
      <div className="p-5">
        <h3 className="font-semibold">Project title</h3>
        <p className="text-sm text-slate-600">Location • Scope • Year</p>
      </div>
    </article>
  )
}

const imgs = [
  'https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543217889-11ed1c50a43e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616597134686-7eaf5f1ac6ac?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154668-1e8a3c9d6f06?q=80&w=1200&auto=format&fit=crop',
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Selected projects</h2>
            <p className="mt-2 text-slate-600">A small sample of recent work. Swap these with GMC photos.</p>
          </div>
          <a href="#contact" className="hidden md:inline rounded-xl bg-slate-900 text-white px-4 py-2">Discuss your project</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {imgs.map((img,i)=>(<Card key={i} img={img} />))}
        </div>
      </div>
    </section>
  )
}
