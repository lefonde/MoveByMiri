type ImageGalleryProps = {
  images: { src: string; alt: string }[]
  columns?: 2 | 3
  className?: string
}

export function ImageGallery({
  images,
  columns = 3,
  className = '',
}: ImageGalleryProps) {
  const lgCols = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${lgCols} ${className}`}>
      {images.map((image) => (
        <div
          key={image.src}
          className="aspect-[3/4] overflow-hidden rounded-t-full"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
