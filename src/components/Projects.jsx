function Card({img}){
  return (
    <article className="group rounded-2xl overflow-hidden border bg-white">
     <div
  className="h-48 bg-cover bg-center group-hover:scale-[1.02] transition"
  style={{ backgroundImage: `url(${img})` }}
/>
      <div className="p-5">
        <h3 className="font-semibold">Project title</h3>
        <p className="text-sm text-slate-600">Location • Scope • Year</p>
      </div>
    </article>
  )
}
function loadImages(globObj) {
  return Object.entries(globObj)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod.default)
}

const BALGOWLAH = loadImages(
  import.meta.glob("../assets/projectBalgowlah/*.{jpg,jpeg,png,webp}", {
    eager: true,
  })
)

const imgs = [
  BALGOWLAH[0]
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
