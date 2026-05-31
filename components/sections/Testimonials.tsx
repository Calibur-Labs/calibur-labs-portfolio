'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { testimonials } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import GradientText from '@/components/ui/GradientText'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 24px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>Kind Words</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <GradientText
              as="h2"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              What Our Clients Say
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
            Don&apos;t take our word for it — hear from the people we&apos;ve built for.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '24px',
                padding: '48px',
                overflow: 'hidden',
                height: '360px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                width: '60%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(38,52,87,0.7), transparent)',
              }} />

              {/* Quote mark */}
              <div
                style={{
                  fontSize: '80px',
                  lineHeight: 0.8,
                  color: '#ffffff',
                  opacity: 0.3,
                  fontFamily: 'Georgia, serif',
                  marginBottom: '24px',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </div>

              <p
                style={{
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#c5c9d0',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                  margin: '0 0 40px',
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(38,52,87,0.7)',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-syne), system-ui, sans-serif', fontWeight: 700, fontSize: '16px', color: '#e2e8f0', margin: '0 0 2px' }}>
                    {t.author}
                  </p>
                  <p style={{ fontSize: '13px', color: '#636972', margin: 0, fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#8a9099',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(38,52,87,0.9)'
                el.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.color = '#8a9099'
              }}
            >
              ←
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    background: i === current ? '#ffffff' : 'rgba(255,255,255,0.15)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#8a9099',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(38,52,87,0.9)'
                el.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.color = '#8a9099'
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
