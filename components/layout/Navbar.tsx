'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (val) => {
    setScrolled(val > 40)
  })

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? '#090c14' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/images/logo.svg" alt="Calibur Labs" width={32} height={32} />
          <span
            style={{
              fontFamily: 'var(--font-syne), system-ui, sans-serif',
              fontWeight: 800,
              fontSize: '18px',
              color: '#e2e8f0',
              letterSpacing: '-0.01em',
            }}
          >
            Calibur Labs
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#8a9099',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#e2e8f0')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8a9099')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 22px',
              borderRadius: '8px',
              background: '#ffffff',
              color: '#000000',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-poppins), system-ui, sans-serif',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            className="btn-shimmer"
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#e2e8f0', borderRadius: '2px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#e2e8f0', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#e2e8f0', borderRadius: '2px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              background: '#090c14',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#8a9099',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-shimmer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 30px',
                  borderRadius: '15px',
                  background: '#ffffff',
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
