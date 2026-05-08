export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L16 16M16 2L2 16" stroke="#E05A3A" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div>
            <div className="text-sm font-semibold text-navy leading-none tracking-tight">Kalahealth</div>
            <div className="text-[10px] text-gray-400 leading-snug tracking-wide">Medical Distribution</div>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Coverage', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-navy transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-5 py-2 text-xs font-medium border border-gray-300 text-gray-700 rounded-full hover:border-navy hover:text-navy transition-colors"
        >
          Request Info
        </a>
      </div>
    </nav>
  )
}
