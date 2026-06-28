import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from 'framer-motion'

function Building({ variant }: { variant: 'before' | 'after' }) {
  const isAfter = variant === 'after'
  const wall = isAfter ? '#1e3a5f' : '#3f3f46'
  const wallTop = isAfter ? '#2563eb' : '#52525b'
  const accent = isAfter ? '#60a5fa' : '#71717a'
  const window = isAfter ? '#bfdbfe' : '#27272a'
  const windowOpacity = isAfter ? 0.9 : 0.55

  return (
    <svg
      viewBox="0 0 600 700"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
    >
      <defs>
        <linearGradient id={`wall-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={wallTop} />
          <stop offset="100%" stopColor={wall} />
        </linearGradient>
        {!isAfter && (
          <pattern id="cracks" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M5 0 L8 18 L2 30 L10 40" stroke="#27272a" strokeWidth="1.2" fill="none" opacity="0.6" />
            <path d="M30 5 L26 25 L34 38" stroke="#27272a" strokeWidth="1" fill="none" opacity="0.5" />
          </pattern>
        )}
      </defs>

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
          stroke={isAfter ? accent : '#27272a'}
          strokeWidth={isAfter ? 1.5 : 1}
          opacity={isAfter ? 0.35 : 0.5}
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
            opacity="0.25"
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
            fill={window}
            opacity={windowOpacity}
            stroke={isAfter ? '#1d4ed8' : '#18181b'}
            strokeWidth="3"
          />
        ))
      )}

      {/* Roof */}
      <rect x="60" y="100" width="480" height="28" rx="4" fill={isAfter ? '#1d4ed8' : '#3f3f46'} />

      {/* Door */}
      <rect x="270" y="600" width="60" height="80" rx="3" fill={isAfter ? '#1e40af' : '#27272a'} />
    </svg>
  )
}

function SprayParticles({ active }: { active: MotionValue<number> }) {
  const opacity = useTransform(active, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => {
        const delay = (i % 6) * 0.12
        const spread = (i % 5) - 2
        return (
          <motion.span
            key={i}
            className="absolute left-0 top-1/2 rounded-full"
            style={{
              width: 6 + (i % 4) * 3,
              height: 6 + (i % 4) * 3,
              background:
                'radial-gradient(circle, rgba(147,197,253,0.95) 0%, rgba(37,99,235,0.4) 70%, transparent 100%)',
            }}
            animate={{
              x: [-10, 120 + (i % 5) * 18],
              y: [0, spread * 26],
              opacity: [0.9, 0],
              scale: [0.4, 1.4],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay,
              ease: 'easeOut',
            }}
          />
        )
      })}
    </motion.div>
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
  const gunActive = useTransform(scrollYProgress, [0.1, 0.85], [0, 1])

  // Headline cross-fade
  const beforeOpacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0])
  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  return (
    <section id="reveal" ref={ref} className="relative h-[320vh] bg-norvan-900">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-norvan-accent/10 blur-[150px]" />

        <div className="relative z-10 text-center px-5 mb-6">
          <p className="text-sm uppercase tracking-[0.25em] text-norvan-accentLight mb-3">
            Regardez la transformation
          </p>
          <div className="relative h-[58px] sm:h-[72px]">
            <motion.h2
              style={{ opacity: beforeOpacity }}
              className="absolute inset-x-0 text-3xl sm:text-6xl font-extrabold text-norvan-400"
            >
              Usée. Terne. Fatiguée.
            </motion.h2>
            <motion.h2
              style={{ opacity: afterOpacity }}
              className="absolute inset-x-0 text-3xl sm:text-6xl font-extrabold gradient-accent"
            >
              Rénovée en un passage.
            </motion.h2>
          </div>
        </div>

        {/* Building stage */}
        <div className="relative w-[min(70vw,460px)] aspect-[6/7]">
          {/* Before (base layer) */}
          <div className="absolute inset-0">
            <Building variant="before" />
          </div>

          {/* After (revealed via clip-path) */}
          <motion.div style={{ clipPath: clip }} className="absolute inset-0">
            <Building variant="after" />
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
            <div className="relative">
              <SprayParticles active={gunActive} />
              {/* nozzle */}
              <div className="relative flex items-center -translate-x-2">
                <div className="w-10 h-3.5 rounded-l-sm bg-gradient-to-b from-norvan-200 to-norvan-500 rotate-[8deg]" />
                <div className="w-3 h-7 rounded-sm bg-gradient-to-b from-norvan-300 to-norvan-600 -ml-1" />
                <div className="absolute -bottom-7 left-1 w-3.5 h-9 rounded-b-md bg-gradient-to-b from-norvan-500 to-norvan-700 rotate-[20deg] origin-top" />
              </div>
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
