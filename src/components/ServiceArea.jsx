const regions = ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West Coast', 'Mountain West']

function USMap() {
  return (
    <svg
      viewBox="0 0 700 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Continental US outline */}
      <path
        d="M155 58 L198 46 L248 38 L308 34 L370 36 L430 40 L488 48 L536 56 L578 66
           L612 80 L638 100 L652 124 L658 152 L654 182 L642 212 L622 240
           L600 262 L574 278 L544 290 L560 312 L558 342 L544 368
           L528 380 L510 374 L498 356 L484 340 L462 330 L432 326
           L400 330 L364 324 L320 316 L278 308 L240 300 L204 288
           L172 270 L148 248 L126 220 L110 190 L102 158 L104 126
           L114 96 L132 72 Z"
        stroke="white"
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.06)"
      />
      {/* Florida peninsula */}
      <path
        d="M558 290 L574 310 L588 338 L594 366 L584 392 L568 402
           L552 394 L542 368 L542 338 L550 310 Z"
        stroke="white"
        strokeWidth="1"
        fill="rgba(255,255,255,0.06)"
      />
      {/* Subtle state grid lines */}
      <line x1="310" y1="36" x2="320" y2="316" stroke="white" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="430" y1="40" x2="440" y2="300" stroke="white" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="104" y1="158" x2="654" y2="152" stroke="white" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="110" y1="222" x2="620" y2="210" stroke="white" strokeWidth="0.4" strokeOpacity="0.3" />
      {/* Alaska (simplified) */}
      <path
        d="M118 370 L145 362 L168 360 L172 374 L162 386 L140 390 L120 384 Z"
        stroke="white"
        strokeWidth="1"
        fill="rgba(255,255,255,0.04)"
        strokeOpacity="0.5"
      />
      {/* Hawaii (simplified) */}
      <ellipse cx="210" cy="416" rx="22" ry="10" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.04)" strokeOpacity="0.5" />
      <ellipse cx="244" cy="420" rx="13" ry="7" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.04)" strokeOpacity="0.5" />
    </svg>
  )
}

export default function ServiceArea() {
  return (
    <section className="bg-navy py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-blue-300/50 text-xs font-semibold uppercase tracking-widest mb-3">Service Area</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">Serving facilities nationwide.</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Kalahealth distributes across the United States. Contact us to confirm availability and pricing in your
            region
          </p>
        </div>

        {/* Map + stats */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* US Map */}
          <div className="opacity-25 h-64 md:h-80">
            <USMap />
          </div>

          {/* Stats */}
          <div>
            <div className="text-8xl font-bold text-white leading-none mb-2">50</div>
            <p className="text-base font-semibold text-white mb-5">States served. National distribution</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              SAFIRA gives anesthesia clinicians full control of the regional block process – solo. With real-time
              injection pressure feedback, it helps prevent intraneural and intravascular injections, improving both
              safety and workflow efficiency.
            </p>

            {/* Region tags */}
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="px-4 py-1.5 text-xs text-white border border-white/20 bg-white/5 rounded-sm tracking-wide"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
