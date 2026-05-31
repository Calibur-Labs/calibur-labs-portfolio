'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { projects, type Project } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import GradientText from '@/components/ui/GradientText'

type Filter = 'All' | 'Web' | 'Mobile' | 'Design'
const filters: Filter[] = ['All', 'Web', 'Mobile', 'Design']

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')

  const filtered: Project[] =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      id="work"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>Our Work</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <GradientText
              as="h2"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Selected Projects
            </GradientText>
          </motion.div>
          <motion.p
            variants={fadeUp}
            style={{
              color: '#636972',
              fontSize: '16px',
              lineHeight: 1.8,
              marginTop: '16px',
              fontFamily: 'var(--font-poppins), system-ui, sans-serif',
            }}
          >
            A selection of real work we&apos;ve shipped — built with care, shipped with precision.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: 'none',
                background: active === f ? 'rgba(38,52,87,0.4)' : 'transparent',
                color: active === f ? '#ffffff' : '#636972',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                cursor: 'pointer',
                borderBottom: active === f ? '2px solid #ffffff' : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '3/2',
                  border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                }}
                whileHover="hover"
              >
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.02)' }} />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />

                {/* Hover Overlay */}
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                  }}
                >
                  <p style={{ fontSize: '12px', color: '#ffffff', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
                    {project.category}
                  </p>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0', margin: '0 0 12px', fontFamily: 'var(--font-syne), system-ui, sans-serif' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '3px 10px',
                          borderRadius: '99px',
                          background: 'rgba(255,255,255,0.08)',
                          color: '#8a9099',
                          fontSize: '12px',
                          fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      style={{
                        color: '#ffffff',
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                      }}
                    >
                      View Case Study →
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
