import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeading } from './Section'
import { TESTIMONIALS } from '../lib/content'

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Témoignages"
          title={
            <>
              Plébiscités par les <span className="gradient-accent">propriétaires.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-8 rounded-3xl glass flex flex-col"
            >
              <Quote className="text-norvan-accent/40 mb-5" size={36} />
              <blockquote className="text-lg leading-relaxed text-norvan-100 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-norvan-accent/20 text-norvan-accentLight font-bold">
                  {t.author.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-norvan-400">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
