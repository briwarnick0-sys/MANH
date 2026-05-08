export default function Hero() {
  return (
    <section className="bg-navy py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white leading-tight mb-5">
            Advanced care,{' '}
            <em className="font-serif font-light not-italic" style={{ fontStyle: 'italic' }}>
              delivered
            </em>
            <br />
            where it matters.
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-9 max-w-xs">
            Kalahealth is a medical sales distribution company bringing innovative regional anesthesia
            technology to healthcare facilities across the country
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#products"
              className="px-7 py-3 bg-white text-navy text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3 border border-white/25 text-white/90 text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
