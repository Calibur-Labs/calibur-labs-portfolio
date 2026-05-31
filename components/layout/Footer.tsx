'use client'

import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Web Development', href: '#services' },
  { label: 'Mobile Apps', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
  { label: 'Cloud & DevOps', href: '#services' },
  { label: 'AI Integration', href: '#services' },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'GitHub', href: '#', icon: 'gh' },
  { label: 'Twitter/X', href: '#', icon: 'x' },
]

const linkStyle: React.CSSProperties = {
  color: '#636972',
  fontSize: '14px',
  fontFamily: 'var(--font-poppins), system-ui, sans-serif',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'block',
  lineHeight: '2',
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255,255,255,0.04)',
        background: '#090c14',
        padding: '64px 24px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '48px',
            paddingBottom: '48px',
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <Image src="/images/logo.svg" alt="Calibur Labs" width={28} height={28} />
              <span style={{ fontFamily: 'var(--font-syne), system-ui, sans-serif', fontWeight: 800, fontSize: '16px', color: '#e2e8f0' }}>
                Calibur Labs
              </span>
            </Link>
            <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.7, fontFamily: 'var(--font-poppins), system-ui, sans-serif', maxWidth: '220px' }}>
              Software that drives real business results.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-poppins), system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Company
            </p>
            {navLinks.map((l) => (
              <Link key={l.href + l.label} href={l.href} style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#8a9099')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#636972')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Services */}
          <div>
            <p style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-poppins), system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Services
            </p>
            {serviceLinks.map((l) => (
              <Link key={l.label} href={l.href} style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#8a9099')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#636972')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — Social */}
          <div>
            <p style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-poppins), system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Connect
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '15px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#636972',
                    fontSize: '12px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-poppins), system-ui, sans-serif',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(38,52,87,0.9)'
                    el.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.color = '#636972'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p style={{ color: '#636972', fontSize: '13px', fontFamily: 'var(--font-poppins), system-ui, sans-serif', marginTop: '20px' }}>
              caliburlabz@gmail.com
            </p>
            <p style={{ color: '#636972', fontSize: '13px', fontFamily: 'var(--font-poppins), system-ui, sans-serif', marginTop: '4px' }}>
              +94 76 58 31021
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p style={{ color: '#636972', fontSize: '13px', fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
            © {new Date().getFullYear()} Calibur Labs. All rights reserved.
          </p>
          <p style={{ color: '#636972', fontSize: '13px', fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
