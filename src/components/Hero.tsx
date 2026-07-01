import { ArrowDown, Play, ShieldCheck, Star } from 'lucide-react'
import { COMPANY } from '../lib/content'

const SKYLINE = [52, 78, 40, 92, 64, 86, 48, 72, 58]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-norvan-800 via-norvan-900 to-norvan-900" />
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[820px] max-w-[140vw] aspect-square rounded-full bg-norvan-accent/20 blur-[130px]"
          style={{ animation: 'floatBlob 9s ease-in-out infinite' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Building skyline */}
        <div className="absolute bottom-0 inset-x-0 h-[38%] opacity-20">
          <div className="mx-auto max-w-6xl h-full flex items-end justify-center gap-2 sm:gap-3 px-4">
            {SKYLINE.map((h, i) => (
              <div
                key={i}
                className="hero-bar flex-1 rounded-t-md bg-gradient-to-t from-norvan-accent/50 to-white/10"
                style={{
                  height: `${h}%`,
                  animationDelay: `${0.2 + i * 0.07}s`,
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 13px, rgba(255,255,255,0.16) 13px, rgba(255,255,255,0.16) 15px)',
                }}
              />
            ))}
          </div>
        </div>
        {/* fade to page bg */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-norvan-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 mx-auto w-full max-w-7xl px-5 sm:px-8 flex flex-col justify-center pt-32 pb-28 sm:pb-32">
        <span
          className="hero-rise inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full panel text-xs sm:text-sm text-norvan-100 mb-7"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-norvan-accentLight opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-norvan-accentLight" />
          </span>
          Réservations ouvertes pour la nouvelle saison
        </span>

        <h1 className="max-w-4xl text-[clamp(2.5rem,8.5vw,6.5rem)] font-extrabold leading-[0.98] tracking-tight text-balance">
          <span className="hero-rise block gradient-text" style={{ animationDelay: '0.12s' }}>
            Des façades qui
          </span>
          <span className="hero-rise block gradient-accent" style={{ animationDelay: '0.22s' }}>
            font tourner les têtes.
          </span>
        </h1>

        <p
          className="hero-rise mt-7 max-w-xl text-base sm:text-xl text-norvan-300 leading-relaxed"
          style={{ animationDelay: '0.34s' }}
        >
          {COMPANY.name} transforme les extérieurs fatigués en façades
          saisissantes et résistantes aux intempéries. Bardage, revêtements et
          cladding premium conçus pour durer.
        </p>

        <div
          className="hero-rise mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          style={{ animationDelay: '0.46s' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-norvan-900 font-semibold transition-transform hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
          >
            Démarrer votre projet
          </a>
          <a
            href={COMPANY.tiktok}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl panel font-semibold transition-colors hover:bg-white/10 w-full sm:w-auto"
          >
            <span className="grid place-items-center w-9 h-9 rounded-full bg-norvan-accent/20 group-hover:bg-norvan-accent/30 transition-colors">
              <Play size={16} className="ml-0.5 fill-norvan-accentLight text-norvan-accentLight" />
            </span>
            Voir sur TikTok
          </a>
        </div>

        {/* Trust row */}
        <div
          className="hero-rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-norvan-400"
          style={{ animationDelay: '0.58s' }}
        >
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={18} className="text-norvan-accentLight" />
            Garantie 25 ans
          </span>
          <span className="inline-flex items-center gap-2">
            <Star size={18} className="text-norvan-accentLight" />
            450+ façades réalisées
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-norvan-accentLight" />
            Devis gratuit sous 24 h
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="hero-rise absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-norvan-400 hover:text-norvan-200 transition-colors"
        style={{ animationDelay: '0.8s' }}
        aria-label="Défiler vers le bas"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Défiler</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
