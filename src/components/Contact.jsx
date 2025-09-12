export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-600">Sydney, NSW • Mon–Fri 7:00–16:00</p>
          <div className="mt-6 space-y-2 text-sm">
            <p><span className="font-semibold">Phone:</span> (02) 0000 0000</p>
            <p><span className="font-semibold">Email:</span> info@gmcsolutions.com.au</p>
            <p><span className="font-semibold">ABN:</span> 00 000 000 000</p>
          </div>
        </div>
        <form className="bg-white rounded-2xl border p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="First name" className="border rounded-xl px-3 py-2" />
            <input placeholder="Last name" className="border rounded-xl px-3 py-2" />
          </div>
          <input placeholder="Email" className="border rounded-xl px-3 py-2" />
          <input placeholder="Phone" className="border rounded-xl px-3 py-2" />
          <textarea placeholder="Tell us about your project" className="border rounded-xl px-3 py-2 min-h-[120px]" />
          <button type="button" className="rounded-xl bg-slate-900 text-white px-5 py-3">Send enquiry</button>
          <p className="text-xs text-slate-500">By submitting you agree to be contacted about your enquiry. We’ll never spam you.</p>
        </form>
      </div>
    </section>
  )
}
