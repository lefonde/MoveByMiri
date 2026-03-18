type PricingCardProps = {
  title: string
  price: string
  description?: string
  highlight?: boolean
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
}

export function PricingCard({
  title,
  price,
  description,
  highlight = false,
  ctaLabel,
  onCtaClick,
  className = '',
}: PricingCardProps) {
  const cardBg = highlight ? 'bg-[#556B2F] text-white' : 'bg-[#F5F0EB] text-[#3A3632]'
  const descriptionColor = highlight ? 'text-white/80' : 'text-[#756A5E]'
  const buttonStyle = highlight
    ? 'bg-white text-[#556B2F] hover:bg-white/90'
    : 'bg-[#556B2F] text-white hover:bg-[#556B2F]/90'

  return (
    <div
      className={`rounded-[2rem] p-8 text-center transition-all duration-200 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(85,107,47,0.15)] ${cardBg} ${className}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      <h3 className="font-serif text-[1.5rem]">{title}</h3>
      <p className="mt-4 font-serif text-[2.25rem] font-semibold">{price}</p>
      {description && <p className={`mt-3 font-sans text-sm ${descriptionColor}`}>{description}</p>}
      {ctaLabel && (
        <button
          type="button"
          onClick={onCtaClick}
          className={`mt-6 inline-block rounded-[2rem] px-6 py-3 font-sans text-sm font-medium transition-colors duration-200 ${buttonStyle}`}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  )
}
