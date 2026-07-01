import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { COMPANY, NAV_LINKS } from '../lib/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`hero-rise fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass-dark shadow-2xl shadow-black/40' : 'bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo />
            <span className="text-lg font-bold tracking-tight">
              {COMPANY.name}
              <span className="text-norvan-accentLight">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-norvan-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-white text-norvan-900 hover:bg-norvan-100 transition-colors"
            >
              Devis gratuit
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg hover:bg-white/5 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-5 mt-2 rounded-2xl glass-dark p-4 origin-top animate-[heroRise_0.25s_ease_forwards]">
          <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-norvan-100 hover:bg-white/5 hover:text-white font-medium"
                >
                  {link.label}
                </a>
              ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-white text-norvan-900 font-semibold text-center"
            >
              Devis gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
