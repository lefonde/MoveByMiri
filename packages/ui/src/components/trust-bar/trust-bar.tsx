export type TrustBarProps = {
  headline: string
  subline: string
  ctaHref?: string
  className?: string
}

export function TrustBar({ headline, subline, ctaHref, className = '' }: TrustBarProps) {
  return (
    <div
      className={`bg-[#1A2E1A] px-6 py-4 text-center ${className}`}
      role="complementary"
      aria-label="Availability"
    >
      {/* flex-col on mobile (clean two-line stack), flex-row on sm+ (single band) */}
      <p
        className="flex flex-col items-center gap-1 font-sans uppercase tracking-[0.14em] sm:flex-row sm:justify-center sm:gap-3"
        style={{ fontSize: '0.75rem' }}
      >
        {/* Headline uses cream — #C27E60 at 12px fails 4.5:1 on this dark bg */}
        <strong className="font-semibold text-[#FAF8F5]">{headline}</strong>
        {ctaHref ? (
          <a
            href={ctaHref}
            className="text-[#FAF8F5]/75 transition-colors duration-150 hover:text-[#FAF8F5] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#FAF8F5]/60"
          >
            {subline}
          </a>
        ) : (
          <span className="text-[#FAF8F5]/75">{subline}</span>
        )}
      </p>
    </div>
  )
}
