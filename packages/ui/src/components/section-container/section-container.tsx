export type SectionContainerProps = {
  background?: 'default' | 'cream' | 'warm'
  children: React.ReactNode
  className?: string
  id?: string
}

const backgroundClasses: Record<
  NonNullable<SectionContainerProps['background']>,
  string
> = {
  default: 'bg-[#FAF8F5]',
  cream: 'bg-[#F5F0EB]',
  warm: 'bg-[#E8E0D8]',
}

export function SectionContainer({
  background = 'default',
  children,
  className = '',
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={`${backgroundClasses[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  )
}
