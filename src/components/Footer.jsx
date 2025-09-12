export default function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} GMC Solutions. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-700">Instagram</a>
          <a href="#" className="hover:text-slate-700">Facebook</a>
          <a href="#" className="hover:text-slate-700">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}
