import { motion } from 'framer-motion'
import { SectionHeading } from './Section'
import { SERVICES } from '../lib/content'

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Notre savoir-faire"
          title={
            <>
              Chaque surface,{' '}
              <span className="gradient-accent">finie avec expertise.</span>
            </>
          }
          subtitle="De la rénovation complète aux revêtements projetés de précision, nous couvrons toute l’enveloppe extérieure de votre bien."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-3xl panel hover:bg-white/[0.07] transition-colors overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-norvan-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-norvan-accent/15 ring-1 ring-norvan-accent/25 text-norvan-accentLight mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </span>
                  <h3 className="text-xl font-bold mb-2.5">{service.title}</h3>
                  <p className="text-norvan-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
