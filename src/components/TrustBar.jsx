export default function TrustBar() {
  return (
    <section className="py-10 border-b">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs uppercase tracking-widest text-slate-500">Selected clients & builders</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70">
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
        </div>
      </div>
    </section>
  )
}
