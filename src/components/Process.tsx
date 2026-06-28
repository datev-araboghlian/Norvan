import { motion } from 'framer-motion'
import { SectionHeading } from './Section'
import { PROCESS_STEPS } from '../lib/content'

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-36 bg-norvan-800/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Comment ça marche"
          title={
            <>
              Une méthode fondée sur la <span className="gradient-accent">confiance.</span>
            </>
          }
          subtitle="Cinq étapes claires, du premier appel à la révélation finale. Vous savez toujours précisément où en est votre projet."
        />

        <div className="mt-16 relative">
          {/* connecting line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-norvan-accent/40 via-white/10 to-transparent md:hidden" />

          <div className="grid gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex md:flex-col gap-5 md:gap-0"
              >
                <div className="relative z-10 shrink-0">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-norvan-900 ring-1 ring-norvan-accent/30 text-norvan-accentLight font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <div className="md:mt-6">
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-norvan-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
