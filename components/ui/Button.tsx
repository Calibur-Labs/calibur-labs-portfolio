'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const isPrimary = variant === 'primary'

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'var(--font-poppins), system-ui, sans-serif',
    letterSpacing: '0.02em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    border: '1px solid',
    ...(isPrimary
      ? {
          background: '#ffffff',
          borderColor: '#ffffff',
          color: '#000000',
        }
      : {
          background: 'transparent',
          borderColor: 'rgba(255,255,255,0.12)',
          color: '#e2e8f0',
        }),
  }

  const cls = `btn-shimmer ${className}`.trim()

  if (href) {
    return (
      <Link href={href} style={baseStyle} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={baseStyle} className={cls}>
      {children}
    </button>
  )
}
