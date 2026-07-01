import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react'
import { COMPANY } from '../lib/content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-norvan-800 via-norvan-900 to-norvan-900" />
          <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-norvan-accent/15 blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-norvan-accentLight mb-4">
                Contactez-nous
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
                Offrons une <span className="gradient-accent">nouvelle peau</span> à votre bâtiment.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-norvan-300 leading-relaxed max-w-md">
                Parlez-nous de votre projet et nous vous recontacterons avec un
                devis gratuit et sans engagement.
              </p>

              <div className="mt-10 space-y-4">
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                  <span className="grid place-items-center w-12 h-12 rounded-xl panel text-norvan-accentLight group-hover:bg-white/10 transition-colors">
                    <Mail size={20} />
                  </span>
                  <span className="text-norvan-200 group-hover:text-white transition-colors">
                    {COMPANY.email}
                  </span>
                </a>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 group">
                  <span className="grid place-items-center w-12 h-12 rounded-xl panel text-norvan-accentLight group-hover:bg-white/10 transition-colors">
                    <Phone size={20} />
                  </span>
                  <span className="text-norvan-200 group-hover:text-white transition-colors">
                    {COMPANY.phone}
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-12 h-12 rounded-xl panel text-norvan-accentLight">
                    <MapPin size={20} />
                  </span>
                  <span className="text-norvan-200">{COMPANY.location}</span>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[300px] flex flex-col items-center justify-center text-center panel rounded-3xl p-10"
                >
                  <span className="grid place-items-center w-16 h-16 rounded-full bg-norvan-accent/20 text-norvan-accentLight mb-5">
                    <Check size={32} />
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Merci, {form.name || 'à vous'} !</h3>
                  <p className="text-norvan-300 max-w-xs">
                    Votre demande a bien été reçue. Nous vous recontacterons sous
                    un jour ouvré.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-norvan-accent/60 focus:bg-white/10 outline-none transition-colors placeholder:text-norvan-500"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Adresse e-mail"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-norvan-accent/60 focus:bg-white/10 outline-none transition-colors placeholder:text-norvan-500"
                    />
                  </div>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-norvan-accent/60 focus:bg-white/10 outline-none transition-colors text-norvan-200"
                  >
                    <option value="" className="bg-norvan-800">Choisir un service</option>
                    <option value="cladding" className="bg-norvan-800">Bardage composite</option>
                    <option value="coating" className="bg-norvan-800">Revêtement de façade</option>
                    <option value="residing" className="bg-norvan-800">Rénovation complète</option>
                    <option value="restoration" className="bg-norvan-800">Restauration</option>
                    <option value="other" className="bg-norvan-800">Autre chose</option>
                  </select>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Parlez-nous de votre projet..."
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-norvan-accent/60 focus:bg-white/10 outline-none transition-colors resize-none placeholder:text-norvan-500"
                  />
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-norvan-900 font-semibold hover:bg-norvan-100 transition-all active:scale-[0.98]"
                  >
                    Envoyer la demande
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
