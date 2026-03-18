type FeatureCardProps = {
  image: string
  imageAlt: string
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  image,
  imageAlt,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] bg-[#F5F0EB] transition-shadow duration-200 hover:shadow-md ${className}`}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-t-full">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-[1.5rem] text-[#3A3632]">{title}</h3>
        <p className="mt-2 font-sans text-base text-[#756A5E]">{description}</p>
      </div>
    </div>
  )
}
