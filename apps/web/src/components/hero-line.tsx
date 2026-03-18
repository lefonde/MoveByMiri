'use client'

export function HeroLine() {
  return (
    <hr
      className="mx-auto mt-6 border-0"
      style={{
        width: 'clamp(80px, 10vw, 120px)',
        borderTop: '1px solid rgba(250, 248, 245, 0.4)',
        transformOrigin: 'center',
        animation: 'lineExtend 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        animationDelay: '500ms',
      }}
      aria-hidden="true"
    />
  )
}
