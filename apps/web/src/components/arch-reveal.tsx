'use client'

import { useEffect, useRef, useState } from 'react'
import { ArchImage } from '@yoga/ui'

type ArchRevealProps = {
  src: string
  alt: string
  className?: string
}

export function ArchReveal({ src, alt, className = '' }: ArchRevealProps) {
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
    <div
      ref={containerRef}
      className={className}
      style={{
        transition:
          'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'scale(1)' : 'scale(0.97)',
      }}
    >
      <ArchImage src={src} alt={alt} aspectRatio="portrait" />
    </div>
  )
}
