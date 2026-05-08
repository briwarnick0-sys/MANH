const features = [
  {
    icon: (
      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: 'Real time injection pressure monitoring throughout the procedure',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: 'Clinically validated to reduce risk of nerve injury',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    text: 'Single Operator design. No assistant required for block delivery',
  },
  {
    icon: (
      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    text: 'Contracted on Vizient GPO for simplified hospital procurement',
  },
]

function SafiraPlaceholder() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
      {/* Device body */}
      <rect x="60" y="75" width="190" height="50" rx="8" fill="#D6E4EC" />
      <rect x="60" y="75" width="60" height="50" rx="8" fill="#4A7B8C" />
      {/* Label area */}
      <rect x="128" y="83" width="110" height="34" rx="4" fill="white" fillOpacity="0.7" />
      <text x="183" y="105" textAnchor="middle" fill="#0D1E2D" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
        SAFIRA
      </text>
      {/* Needle */}
      <rect x="250" y="93" width="42" height="14" rx="2" fill="#B0C8D4" />
      <path d="M292 97 L308 100 L292 103 Z" fill="#9AB8C5" />
      {/* Plunger */}
      <rect x="50" y="82" width="14" height="36" rx="3" fill="#2E6070" />
      <rect x="44" y="85" width="8" height="30" rx="2" fill="#1E4A5A" />
      {/* Accent dots */}
      <circle cx="80" cy="100" r="5" fill="white" fillOpacity="0.5" />
      <circle cx="95" cy="100" r="5" fill="white" fillOpacity="0.3" />
    </svg>
  )
}

export default function Products() {
  return (
    <section id="products" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-label-teal text-xs font-semibold uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-4xl font-bold text-navy mb-4 leading-tight">
            Technology that protects
            <br />
            patients.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            We distribute innovative medical devices built by leading developers in anesthesia safety.
          </p>
        </div>

        {/* Product showcase */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: device image + branding */}
          <div className="flex flex-col items-center gap-6 pt-4">
            <SafiraPlaceholder />
            <div className="text-center">
              <div className="text-base font-bold text-navy tracking-[0.15em] uppercase">Medovate</div>
              <div className="text-xs text-gray-400 mt-0.5">Developing Innovation</div>
            </div>
          </div>

          {/* Right: product details */}
          <div>
            <h3 className="text-3xl font-bold text-navy mb-1 tracking-wide">SAFIRA</h3>
            <p className="text-sm text-gray-500 mb-4">Safer Injection for Regional Anesthesia by Medovate</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-7">
              SAFIRA gives anesthesia clinicians full control of the regional block process – solo. With real-time
              injection pressure feedback, it helps prevent intraneural and intravascular injections, improving both
              safety and workflow efficiency.
            </p>

            {/* Feature cards 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-white rounded-lg">
                  <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
