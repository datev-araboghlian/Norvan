import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './Section'
import { PROJECTS } from '../lib/content'

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Réalisations choisies"
            title={
              <>
                Transformations <span className="gradient-accent">récentes.</span>
              </>
            }
          />
          <p className="max-w-sm text-norvan-300 leading-relaxed">
            Un aperçu des façades que nous avons fait renaître. Chaque projet est
            documenté et partagé avec notre communauté sur TikTok.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 ${
                i % 3 === 0 ? 'sm:row-span-2 aspect-[4/5] sm:aspect-auto' : 'aspect-[4/3]'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              <div className="absolute inset-0 bg-norvan-900/40" />

              {/* facade lines decoration */}
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(255,255,255,0.12) 22px, rgba(255,255,255,0.12) 23px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)',
                }}
              />

              <div
                className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: project.accent }}
              />

              <div className="relative h-full flex flex-col justify-end p-7">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-norvan-200 mb-1.5">
                      {project.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                  </div>
                  <span className="grid place-items-center w-12 h-12 rounded-full glass group-hover:bg-white group-hover:text-norvan-900 transition-all group-hover:rotate-45">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
