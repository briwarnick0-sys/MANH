function ContactCard({ icon, label, value, sub }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-0.5">{label}</p>
        <p className="text-sm font-medium text-navy">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: form */}
          <div>
            <p className="text-label-teal text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl font-bold text-navy leading-tight mb-4">
              Let's talk about your
              <br />
              facility's needs.
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Reach out for pricing, product questions, or to start the Vizient procurement process
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="First and Last Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Facility/Organization</label>
                <input
                  type="text"
                  placeholder="First and Last Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-banner text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col gap-3 md:pt-24">
            <ContactCard
              label="Email"
              value="info@kalahealth.co"
              icon={
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <ContactCard
              label="Location"
              value="Red Bank, NJ"
              sub="Distributing nationally"
              icon={
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
