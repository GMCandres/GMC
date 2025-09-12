export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">G</div>
          <div className="leading-tight">
            <p className="font-semibold text-lg">GMC Solutions</p>
            <p className="text-xs text-slate-500">Joinery • Fitouts • Carpentry — Sydney</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-slate-600">Services</a>
          <a href="#projects" className="hover:text-slate-600">Projects</a>
          <a href="#process" className="hover:text-slate-600">Process</a>
          <a href="#about" className="hover:text-slate-600">About</a>
          <a href="#contact" className="hover:text-slate-600">Contact</a>
          <a href="#quote" className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Get a Quote</a>
        </nav>
      </div>
    </header>
  )
}
