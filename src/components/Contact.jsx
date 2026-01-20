export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-600">Sydney, NSW • Mon–Fri 7:00–16:00</p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+610413893841" className="text-slate-700 hover:text-slate-900">
                +61 0413 893 841
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@gmcsolutions.com.au" className="text-slate-700 hover:text-slate-900">
                info@gmcsolutions.com.au
              </a>
            </p>
            <p><span className="font-semibold">ABN:</span> 386 244 674 65</p>
          </div>
        </div>
        <form
          className="bg-white rounded-2xl border p-6 grid gap-4"
          action="mailto:info@gmcsolutions.com.au"
          method="post"
          encType="text/plain"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input name="firstName" placeholder="First name" className="border rounded-xl px-3 py-2" />
            <input name="lastName" placeholder="Last name" className="border rounded-xl px-3 py-2" />
          </div>
          <input name="email" placeholder="Email" type="email" className="border rounded-xl px-3 py-2" />
          <input name="phone" placeholder="Phone" className="border rounded-xl px-3 py-2" />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            className="border rounded-xl px-3 py-2 min-h-[120px]"
          />
          <button type="submit" className="rounded-xl bg-slate-900 text-white px-5 py-3">Send enquiry</button>
          <p className="text-xs text-slate-500">By submitting you agree to be contacted about your enquiry. We’ll never spam you.</p>
        </form>
      </div>
    </section>
  )
}
