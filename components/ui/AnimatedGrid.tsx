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
      }}
    />
  )
}
