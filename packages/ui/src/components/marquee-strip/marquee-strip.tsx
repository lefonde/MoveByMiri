'use client'

import { useState } from 'react'

export type MarqueeStripProps = {
  text: string
  speed?: 'slow' | 'normal'
}

export function MarqueeStrip({ text, speed = 'normal' }: MarqueeStripProps) {
  const [isHovered, setIsHovered] = useState(false)

  const duration = speed === 'slow' ? 40 : 25
  const repeated = `${text} · ${text} · ${text} · ${text} · `

  return (
    <div
      className="overflow-hidden"
      aria-hidden="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="inline-block whitespace-nowrap font-sans text-xs uppercase tracking-widest text-[#B5A899]"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {repeated}
        {repeated}
      </span>
    </div>
  )
}
