export type FounderQuoteProps = {
  quote: string
  attribution: string
  size?: 'standard' | 'editorial'
  className?: string
}

export function FounderQuote({
  quote,
  attribution,
  size = 'editorial',
  className = '',
}: FounderQuoteProps) {
  const sizeStyles =
    size === 'editorial'
      ? {
          fontSize: 'clamp(2rem, 5vw, 4.5rem)',
          lineHeight: '1.1',
        }
      : {
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          lineHeight: '1.3',
        }

  return (
    <figure className={className}>
      <blockquote className="font-serif italic text-[#3A3632]" style={sizeStyles}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 font-sans text-sm text-[#968A7B]">{attribution}</figcaption>
    </figure>
  )
}
