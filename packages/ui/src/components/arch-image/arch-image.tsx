type ArchImageProps = {
  src: string
  alt: string
  aspectRatio?: 'portrait' | 'square' | 'landscape'
  className?: string
}

const aspectClasses = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
} as const

export function ArchImage({
  src,
  alt,
  aspectRatio = 'portrait',
  className = '',
}: ArchImageProps) {
  return (
    <div
      className={`overflow-hidden rounded-t-full ${aspectClasses[aspectRatio]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
