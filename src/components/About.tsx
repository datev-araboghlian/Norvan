import { motion } from 'framer-motion'
import { SectionHeading } from './Section'
import { STATS } from '../lib/content'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-36 bg-norvan-800/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="À propos de Norvan"
            title={
              <>
                Un savoir-faire qui se <span className="gradient-accent">voit.</span>
              </>
            }
            subtitle="Norvan repose sur une conviction simple : l’extérieur d’un bâtiment devrait être aussi impressionnant que la vie à l’intérieur. Nous allions des matériaux modernes à un souci du détail à l’ancienne, traitant chaque façade comme la nôtre."
          />
          <p className="mt-5 text-norvan-300 leading-relaxed max-w-xl">
            Ce qui a commencé comme une passion pour le partage de rénovations
            réelles en ligne est devenu une référence de confiance pour les
            propriétaires comme pour les gestionnaires. Chaque projet est
            documenté, chaque finition est garantie.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-norvan-900/60 p-6"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-norvan-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-norvan-accent/30 via-norvan-800 to-norvan-900" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.1) 28px, rgba(255,255,255,0.1) 29px), repeating-linear-gradient(90deg, transparent, transparent 70px, rgba(255,255,255,0.07) 70px, rgba(255,255,255,0.07) 71px)',
            }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-t from-norvan-accent/40 to-transparent rounded-t-2xl" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="text-6xl font-extrabold gradient-text">N.</div>
              <p className="mt-2 text-norvan-300 tracking-widest text-sm uppercase">
                Spécialistes de la façade
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
