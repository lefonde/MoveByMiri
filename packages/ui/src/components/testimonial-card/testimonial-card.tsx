export type TestimonialCardProps = {
  quote: string
  name: string
  detail: string
  className?: string
}

export function TestimonialCard({ quote, name, detail, className = '' }: TestimonialCardProps) {
  return (
    <figure className={`rounded-[2rem] bg-[#F5F0EB] p-6 sm:p-8 ${className}`}>
      <blockquote className="font-serif text-lg italic leading-relaxed text-[#3A3632] sm:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 font-sans text-sm text-[#968A7B]">
        <span className="font-medium text-[#574E44]">{name}</span>
        <span className="mx-2" aria-hidden="true">
          &middot;
        </span>
        <span>{detail}</span>
      </figcaption>
    </figure>
  )
}
