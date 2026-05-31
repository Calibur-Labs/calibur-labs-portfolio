'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'
import GradientText from '@/components/ui/GradientText'

const pillars = [
  {
    number: '01',
    title: 'Clean Architecture',
    description: 'We design systems that are easy to maintain, extend, and hand off — no spaghetti code, ever.',
  },
  {
    number: '02',
    title: 'Performance First',
    description: 'Every decision is weighed against speed and efficiency. Fast software is not a bonus — it is the baseline.',
  },
  {
    number: '03',
    title: 'Security by Design',
    description: 'Security is baked in from day one, not patched in at the end. We build with threats in mind.',
  },
  {
    number: '04',
    title: 'Modern Tech Stack',
    description: 'We use the right tools for the job — modern, battle-tested, and well-supported technologies.',
  },
]

export default function BuildWithPrecision() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 24px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ marginBottom: '72px' }}
        >
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>How We Work</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
            <GradientText
              as="h2"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
              }}
            >
              Built with Precision.
            </GradientText>
          </motion.div>
          <motion.p
            variants={fadeUp}
            style={{
              color: '#636972',
              fontSize: '17px',
              lineHeight: 1.7,
              marginTop: '20px',
              textAlign: 'center',
              fontFamily: 'var(--font-poppins), system-ui, sans-serif',
            }}
          >
            We don&apos;t cut corners. Every project follows the same engineering discipline — whether it&apos;s an MVP or a full-scale platform.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
          className="precision-grid"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.number}
              variants={fadeUp}
              style={{
                padding: '48px 40px',
                background: '#0b0f19',
                position: 'relative',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#101624'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#0b0f19'
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-syne), system-ui, sans-serif',
                  fontWeight: 800,
                  fontSize: '13px',
                  color: '#263457',
                  letterSpacing: '0.15em',
                  marginBottom: '20px',
                }}
              >
                {p.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-syne), system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#e2e8f0',
                  margin: '0 0 12px',
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                  fontSize: '15px',
                  color: '#636972',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .precision-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
