export type TrustBarProps = {
  headline: string
  subline: string
  ctaHref?: string
  className?: string
}

export function TrustBar({ headline, subline, ctaHref, className = '' }: TrustBarProps) {
  return (
    <div
      className={`bg-[#2A2623] px-4 py-4 sm:px-6 sm:py-5 ${className}`}
      role="complementary"
      aria-label="Availability"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-sm font-medium text-[#FAF8F5] sm:text-base">{headline}</p>
        {ctaHref ? (
          <p className="mt-1 font-sans text-xs text-[#D4C9BD] sm:text-sm">
            <a
              href={ctaHref}
              className="link-underline transition-colors duration-150 hover:text-[#FAF8F5]"
            >
              {subline}
            </a>
          </p>
        ) : (
          <p className="mt-1 font-sans text-xs text-[#D4C9BD] sm:text-sm">{subline}</p>
        )}
      </div>
    </div>
  )
}
