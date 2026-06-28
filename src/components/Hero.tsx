import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { COMPANY } from '../lib/content'

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-norvan-800 via-norvan-900 to-norvan-900" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-norvan-accent/20 blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        {/* Building silhouette grid */}
        <div className="absolute bottom-0 inset-x-0 h-[45%] opacity-[0.18]">
          <div className="mx-auto max-w-6xl h-full flex items-end justify-center gap-3 px-6">
            {[60, 85, 45, 100, 70, 92, 55, 78].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-norvan-accent/40 to-white/20"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(255,255,255,0.15) 14px, rgba(255,255,255,0.15) 16px)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 min-h-[100svh] flex flex-col justify-center pt-28 pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-norvan-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-norvan-accentLight opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-norvan-accentLight" />
            </span>
            Réservations ouvertes pour la nouvelle saison
          </motion.div>

          <motion.h1
            className="text-[clamp(2.75rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-tight text-balance"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="block gradient-text"
            >
              Des façades qui
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="block"
            >
              <span className="gradient-accent">font tourner les têtes.</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-8 max-w-xl text-base sm:text-xl text-norvan-300 leading-relaxed"
          >
            {COMPANY.name} transforme les extérieurs fatigués en façades
            saisissantes et résistantes aux intempéries. Bardage, revêtements et
            cladding premium conçus pour durer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-norvan-900 font-semibold hover:bg-norvan-100 transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
            >
              Démarrer votre projet
            </a>
            <a
              href={COMPANY.tiktok}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl glass font-semibold hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-norvan-accent/20 group-hover:bg-norvan-accent/30 transition-colors">
                <Play size={16} className="ml-0.5 fill-norvan-accentLight text-norvan-accentLight" />
              </span>
              Voir sur TikTok
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-norvan-400"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
