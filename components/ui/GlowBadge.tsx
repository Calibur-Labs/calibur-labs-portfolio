import { ReactNode } from 'react'

export default function GlowBadge({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(38,52,87,0.4)',
        border: '1px solid rgba(38,52,87,0.5)',
        borderRadius: '99px',
        padding: '8px 20px',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#ffffff',
          flexShrink: 0,
          animation: 'pulseGlow 2s infinite ease-in-out',
        }}
      />
      <span
        style={{
          color: '#ffffff',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-poppins), system-ui, sans-serif',
        }}
      >
        {children}
      </span>
    </div>
  )
}
