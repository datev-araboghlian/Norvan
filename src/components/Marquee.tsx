const ITEMS = [
  'Bardage composite',
  'Revêtement projeté',
  'Fibrociment',
  'Pare-pluie',
  'Panneaux métalliques',
  'Restauration',
  'Imperméabilisation',
  'Finitions sur mesure',
]

export default function Marquee() {
  return (
    <section className="relative py-8 border-y border-white/5 bg-norvan-800/30 overflow-hidden">
      <div className="flex">
        <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-6">
              <span className="text-2xl sm:text-3xl font-semibold text-norvan-400/70 whitespace-nowrap">
                {item}
              </span>
              <span className="text-norvan-accent text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
