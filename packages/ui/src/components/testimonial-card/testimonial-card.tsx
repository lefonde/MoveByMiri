export type TestimonialCardProps = {
  quote: string
  name: string
  detail?: string
  variant?: 'light' | 'dark'
  className?: string
}

export function TestimonialCard({
  quote,
  name,
  detail,
  variant = 'light',
  className = '',
}: TestimonialCardProps) {
  const isLight = variant === 'light'

  return (
    <figure
      className={`rounded-[1.75rem] p-6 sm:p-8 ${
        isLight ? 'bg-[#F5F0E8]' : 'border border-[#FAF8F5]/10 bg-[#FAF8F5]/[0.06]'
      } ${className}`}
    >
      <blockquote
        className={`font-serif italic leading-[1.65] ${
          isLight ? 'text-[#3A3632]' : 'text-[#FAF8F5]/[0.88]'
        }`}
        style={{ fontSize: '1.1rem' }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5">
        <cite
          className="not-italic font-sans font-medium uppercase text-[#C27E60]"
          style={{ fontSize: '0.65rem', letterSpacing: '0.14em' }}
        >
          {name}
        </cite>
        {detail && (
          <>
            <span className="mx-2 text-[#968A7B]" aria-hidden="true">
              &middot;
            </span>
            <span
              className={`font-sans text-xs ${isLight ? 'text-[#968A7B]' : 'text-[#FAF8F5]/50'}`}
            >
              {detail}
            </span>
          </>
        )}
      </figcaption>
    </figure>
  )
}
