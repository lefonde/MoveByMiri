'use client'

import { useEffect, useRef, useState } from 'react'
import { ArchImage } from '@yoga/ui'

type CurtainRevealProps = {
  src: string
  alt: string
  aspectRatio?: 'portrait' | 'square' | 'landscape'
  curtainColor?: string
  className?: string
}

export function CurtainReveal({
  src,
  alt,
  aspectRatio = 'landscape',
  curtainColor = '#FAF8F5',
  className = '',
}: CurtainRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <ArchImage src={src} alt={alt} aspectRatio={aspectRatio} />
      <div
        aria-hidden="true"
        className="motion-safe:transition-transform"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: curtainColor,
          transform: revealed ? 'translateY(-101%)' : 'translateY(0)',
          transitionDuration: '700ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 1,
        }}
      />
    </div>
  )
}
