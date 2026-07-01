import Logo from './Logo'
import { COMPANY, NAV_LINKS } from '../lib/content'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-norvan-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-5">
              <Logo />
              <span className="text-lg font-bold tracking-tight">
                {COMPANY.name}
                <span className="text-norvan-accentLight">.</span>
              </span>
            </a>
            <p className="text-norvan-400 max-w-xs leading-relaxed">
              {COMPANY.tagline}. Des extérieurs transformés par un savoir-faire qui dure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-norvan-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-norvan-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-norvan-300 mb-4">
              Nous suivre
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={COMPANY.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-norvan-400 hover:text-white transition-colors"
                >
                  TikTok {COMPANY.tiktokHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-norvan-400 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-norvan-400 hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-norvan-500">
          <p>© {new Date().getFullYear()} {COMPANY.name} Façade. Tous droits réservés.</p>
          <p>Conçu avec soin pour des façades durables.</p>
        </div>
      </div>
    </footer>
  )
}
