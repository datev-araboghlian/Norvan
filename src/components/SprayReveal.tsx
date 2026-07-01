import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  MotionValue,
} from 'framer-motion'

function Building({ variant }: { variant: 'before' | 'after' }) {
  const isAfter = variant === 'after'
  const wall = isAfter ? '#1e3a5f' : '#3a3a3e'
  const wallTop = isAfter ? '#2f6fdb' : '#55555a'
  const accent = isAfter ? '#60a5fa' : '#6b6b70'
  const glass = isAfter ? '#bfdbfe' : '#232326'
  const glassOpacity = isAfter ? 0.92 : 0.6

  return (
    <svg viewBox="0 0 600 700" className="w-full h-full" preserveAspectRatio="xMidYMax meet" aria-hidden>
      <defs>
        <linearGradient id={`sky-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isAfter ? '#0f2447' : '#0a0a0c'} />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id={`wall-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={wallTop} />
          <stop offset="100%" stopColor={wall} />
        </linearGradient>
        <linearGradient id={`glass-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={glass} stopOpacity={glassOpacity} />
          <stop offset="100%" stopColor={isAfter ? '#60a5fa' : '#000'} stopOpacity={isAfter ? 0.5 : 0.3} />
        </linearGradient>
        {!isAfter && (
          <pattern id="cracks" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M6 0 L10 22 L3 36 L12 60" stroke="#1c1c1f" strokeWidth="1.4" fill="none" opacity="0.65" />
            <path d="M42 6 L36 30 L47 48" stroke="#1c1c1f" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="48" cy="14" r="4" fill="#2a2a2e" opacity="0.4" />
            <circle cx="16" cy="48" r="3" fill="#2a2a2e" opacity="0.35" />
          </pattern>
        )}
      </defs>

      <rect x="0" y="0" width="600" height="700" fill={`url(#sky-${variant})`} />

      {/* Main building body */}
      <rect x="80" y="120" width="440" height="560" fill={`url(#wall-${variant})`} rx="6" />
      {!isAfter && <rect x="80" y="120" width="440" height="560" fill="url(#cracks)" rx="6" />}

      {/* Cladding panel lines */}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="80"
          y1={120 + (i + 1) * 47}
          x2="520"
          y2={120 + (i + 1) * 47}
          stroke={isAfter ? accent : '#1c1c1f'}
          strokeWidth={isAfter ? 1.5 : 1}
          opacity={isAfter ? 0.4 : 0.55}
        />
      ))}
      {isAfter &&
        Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={80 + (i + 1) * 73}
            y1="120"
            x2={80 + (i + 1) * 73}
            y2="680"
            stroke={accent}
            strokeWidth="1.5"
            opacity="0.28"
          />
        ))}

      {/* Windows grid */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={130 + col * 130}
            y={170 + row * 120}
            width="80"
            height="80"
            rx="4"
            fill={`url(#glass-${variant})`}
            stroke={isAfter ? '#1d4ed8' : '#141416'}
            strokeWidth="3"
          />
        ))
      )}

      {/* Roof */}
      <rect x="60" y="100" width="480" height="28" rx="4" fill={isAfter ? '#1d4ed8' : '#3a3a3e'} />

      {/* Door */}
      <rect x="270" y="600" width="60" height="80" rx="3" fill={isAfter ? '#1e40af' : '#1c1c1f'} />
    </svg>
  )
}

function SprayGun() {
  return (
    <svg width="70" height="56" viewBox="0 0 100 80" fill="none" aria-hidden>
      <defs>
        <linearGradient id="gunBarrel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4e4e7" />
          <stop offset="100%" stopColor="#71717a" />
        </linearGradient>
        <linearGradient id="gunHandle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
        <linearGradient id="gunCup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
      </defs>

      {/* pistol-grip handle, hangs down and slightly back from the barrel */}
      <g transform="rotate(-16 35 46)">
        <rect x="27" y="46" width="16" height="42" rx="7" fill="url(#gunHandle)" />
      </g>

      {/* trigger guard connecting handle to barrel */}
      <path d="M39 44 Q29 54 33 64" stroke="#3f3f46" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* paint cup, gravity-feed, sits on top of the barrel */}
      <path d="M42 30 L60 30 L57 10 Q51 5 45 10 Z" fill="url(#gunCup)" stroke="#3f3f46" strokeWidth="1.5" />
      <rect x="46" y="14" width="8" height="5" rx="1.5" fill="#2563eb" opacity="0.8" />

      {/* main barrel */}
      <rect x="22" y="30" width="58" height="16" rx="6" fill="url(#gunBarrel)" />
      <rect x="22" y="30" width="58" height="4.5" rx="2" fill="#fafafa" opacity="0.55" />

      {/* nozzle cone + tip */}
      <path d="M80 32 L98 36 L98 40 L80 44 Z" fill="#3f3f46" />
      <circle cx="99" cy="38" r="4.5" fill="#93c5fd" />
      <circle cx="99" cy="38" r="2" fill="#eff6ff" />
    </svg>
  )
}

function SprayParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => {
        const delay = (i % 6) * 0.12
        const spread = (i % 5) - 2
        return (
          <motion.span
            key={i}
            className="absolute left-[90%] top-[46%] rounded-full"
            style={{
              width: 6 + (i % 4) * 3,
              height: 6 + (i % 4) * 3,
              background:
                'radial-gradient(circle, rgba(147,197,253,0.95) 0%, rgba(37,99,235,0.4) 70%, transparent 100%)',
            }}
            animate={{
              x: [-4, 90 + (i % 5) * 16],
              y: [0, spread * 22],
              opacity: [0.9, 0],
              scale: [0.4, 1.4],
            }}
            transition={{ duration: 0.7, repeat: Infinity, delay, ease: 'easeOut' }}
          />
        )
      })}
    </div>
  )
}

function GrimeDebris() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 7 }).map((_, i) => {
        const delay = (i % 5) * 0.16
        const rise = 30 + (i % 4) * 14
        return (
          <motion.span
            key={i}
            className="absolute left-[84%] top-[48%] rounded-sm bg-norvan-500/70"
            style={{ width: 3 + (i % 3) * 2, height: 3 + (i % 3) * 2 }}
            animate={{
              x: [-4, -34 - (i % 4) * 10],
              y: [0, -rise],
              rotate: [0, 180],
              opacity: [0.8, 0],
            }}
            transition={{ duration: 0.9, repeat: Infinity, delay, ease: 'easeOut' }}
          />
        )
      })}
    </div>
  )
}

export default function SprayReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // The reveal happens during the middle portion of the scroll
  const reveal = useTransform(scrollYProgress, [0.1, 0.85], [0, 100])
  const clip = useMotionTemplate`inset(0 ${useTransform(reveal, (v) => 100 - v)}% 0 0)`

  // Spray gun follows the reveal edge horizontally
  const gunX = useTransform(reveal, [0, 100], ['2%', '92%'])
  const gunActive: MotionValue<number> = useTransform(scrollYProgress, [0.1, 0.85], [0, 1])

  // Shine sweep across the freshly-coated side, trailing just behind the gun
  const shineX = useTransform(reveal, [0, 100], ['-8%', '82%'])

  // Headline cross-fade
  const beforeOpacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0])
  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  // Only run the particle loops while the reveal is actually active — Framer's
  // repeat: Infinity keeps rAF alive forever otherwise, even off-screen.
  const [particlesActive, setParticlesActive] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const active = v > 0.08 && v < 0.87
    setParticlesActive((prev) => (prev === active ? prev : active))
  })

  return (
    <section id="reveal" ref={ref} className="relative h-[320vh] bg-norvan-900">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-6">
        {/* ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-norvan-accent/10 blur-[150px]" />

        <div className="relative z-10 text-center px-5 mb-6">
          <p className="text-sm uppercase tracking-[0.25em] text-norvan-accentLight mb-3">
            Regardez la transformation
          </p>
          <div className="grid">
            <motion.h2
              style={{ opacity: beforeOpacity }}
              className="[grid-area:1/1] text-2xl sm:text-4xl lg:text-6xl font-extrabold text-norvan-400"
            >
              Usée. Terne. Fatiguée.
            </motion.h2>
            <motion.h2
              style={{ opacity: afterOpacity }}
              className="[grid-area:1/1] text-2xl sm:text-4xl lg:text-6xl font-extrabold gradient-accent"
            >
              Rénovée en un passage.
            </motion.h2>
          </div>
        </div>

        {/* Building stage */}
        <div className="relative w-[min(70vw,460px,52vh)] aspect-[6/7] rounded-2xl overflow-hidden border border-white/10">
          {/* Before (base layer) */}
          <div className="absolute inset-0">
            <Building variant="before" />
          </div>

          {/* After (revealed via clip-path) */}
          <motion.div style={{ clipPath: clip }} className="absolute inset-0">
            <Building variant="after" />
            {/* glossy sheen sweeping across the freshly coated surface */}
            <motion.div
              style={{ left: shineX }}
              className="absolute top-0 bottom-0 w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-12deg] mix-blend-overlay"
            />
          </motion.div>

          {/* Wet edge highlight at reveal boundary */}
          <motion.div
            style={{ left: gunX }}
            className="absolute top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-norvan-accentLight to-transparent blur-[1px]"
          />

          {/* Spray gun + particles */}
          <motion.div
            style={{ left: gunX, opacity: gunActive }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-full"
          >
            <div className="relative w-[70px] h-14 drop-shadow-md">
              {particlesActive && <SprayParticles />}
              {particlesActive && <GrimeDebris />}
              <SprayGun />
            </div>
          </motion.div>
        </div>

        {/* hint */}
        <div className="absolute bottom-8 inset-x-0 text-center text-norvan-500 text-sm">
          Continuez à défiler
        </div>
      </div>
    </section>
  )
}
