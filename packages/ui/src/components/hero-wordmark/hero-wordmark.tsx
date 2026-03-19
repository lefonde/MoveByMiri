export type HeroWordmarkProps = {
  text?: string
  staggerDelays?: number[]
  className?: string
}

export function HeroWordmark({
  text = 'MOOV',
  staggerDelays = [0.08, 0.38, 0.68, 0.98],
  className = '',
}: HeroWordmarkProps) {
  return (
    <h1
      className={`font-serif tracking-[0.22em] sm:tracking-[0.32em] ${className}`}
      style={{
        // clamp floor lowered from 5rem → 4rem to prevent overflow at 375px
        fontSize: 'clamp(4rem, 13vw, 9.5rem)',
        fontWeight: 400,
        lineHeight: '1',
        color: 'var(--white, #ffffff)',
      }}
      aria-label={text}
    >
      {text.split('').map((letter, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="wordmark-letter inline-block"
          style={
            {
              '--stagger-delay': `${staggerDelays[i] ?? i * 0.3}s`,
            } as React.CSSProperties
          }
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}
