'use client'

import { motion } from 'framer-motion'

function AuroraRibbon({
  left,
  width,
  color,
  duration,
  delay,
  blur,
  skewRange,
}: {
  left: string
  width: number
  color: string
  duration: number
  delay: number
  blur: number
  skewRange: number
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left,
        top: 0,
        width: `${width}px`,
        height: '65vh',
        borderRadius: `${width * 0.6}px`,
        background: `linear-gradient(180deg,
          transparent 0%,
          ${color} 22%,
          ${color} 78%,
          transparent 100%
        )`,
        filter: `blur(${blur}px)`,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
      animate={{
        y: ['-65vh', '110vh'],
        scaleX: [1, 1.08, 0.93, 1.06, 0.97, 1],
        skewX: [0, skewRange, -skewRange * 0.7, skewRange * 0.5, -skewRange * 0.3, 0],
        x: [0, 8, -6, 10, -4, 0],
      }}
      transition={{
        y: {
          duration,
          repeat: Infinity,
          ease: 'linear',
          delay,
        },
        scaleX: {
          duration: duration * 0.68,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
        skewX: {
          duration: duration * 0.55,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.8,
        },
        x: {
          duration: duration * 0.45,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.4,
        },
      }}
    />
  )
}

export default function AnimatedGrid() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050507',
        backgroundImage: 'radial-gradient(circle at 50% 0%, #111827 0%, #050507 80%)',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Primary ribbon — soft blue, centered */}
      <AuroraRibbon
        left="42%"
        width={200}
        color="rgba(85, 165, 255, 0.11)"
        duration={10}
        delay={0}
        blur={44}
        skewRange={3.5}
      />

      {/* Secondary ribbon — cyan tint, slightly right */}
      <AuroraRibbon
        left="55%"
        width={150}
        color="rgba(55, 205, 225, 0.075)"
        duration={13}
        delay={4}
        blur={52}
        skewRange={2.8}
      />

      {/* Tertiary ribbon — indigo-blue, slightly left */}
      <AuroraRibbon
        left="30%"
        width={130}
        color="rgba(105, 135, 255, 0.065)"
        duration={11}
        delay={7}
        blur={48}
        skewRange={4}
      />

      {/* Wide diffuse ribbon — very faint, wide glow */}
      <AuroraRibbon
        left="25%"
        width={380}
        color="rgba(70, 150, 230, 0.028)"
        duration={16}
        delay={2}
        blur={80}
        skewRange={1.5}
      />
    </div>
  )
}
