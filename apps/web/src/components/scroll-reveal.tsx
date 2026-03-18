'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type ScrollRevealVariant = 'up' | 'up-far' | 'left' | 'right' | 'fade'

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
  variant?: ScrollRevealVariant
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // SSR-safe: render visible by default, only add reveal class after mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const el = ref.current
    if (!el) return

    let timeout: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            el.classList.add('revealed')
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (timeout !== undefined) clearTimeout(timeout)
    }
  }, [delay, isMounted])

  return (
    <div
      ref={ref}
      className={`${isMounted ? 'reveal-element' : ''} ${className}`}
      data-variant={variant}
    >
      {children}
    </div>
  )
}
