'use client'

import { useEffect, useRef, useState } from 'react'

type CounterRiseProps = {
  value: number
  prefix?: string
  suffix?: string
  floor?: number
  duration?: number
  className?: string
}

export function CounterRise({
  value,
  prefix = '$',
  suffix = '.',
  floor,
  duration = 800,
  className = '',
}: CounterRiseProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)
  const [suffixVisible, setSuffixVisible] = useState(false)
  const hasAnimated = useRef(false)

  const startValue = floor ?? Math.round(value * 0.7)

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplay(value)
      setSuffixVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.disconnect()

          const start = performance.now()

          function animate(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Cubic ease-out
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(startValue + (value - startValue) * eased)

            setDisplay(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              // Show suffix after counter lands
              setTimeout(() => setSuffixVisible(true), 100)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [value, startValue, duration])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}`}>
      {prefix}
      {display}
      <span
        className="motion-safe:transition-opacity motion-safe:duration-300"
        style={{ opacity: suffixVisible ? 1 : 0 }}
      >
        {suffix}
      </span>
    </span>
  )
}
