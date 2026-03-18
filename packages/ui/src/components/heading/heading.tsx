export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const levelClasses: Record<number, string> = {
  1: 'text-[3rem] leading-tight tracking-wide',
  2: 'text-[2.25rem] leading-tight tracking-wide',
  3: 'text-[1.875rem] leading-snug',
  4: 'text-[1.5rem] leading-snug',
  5: 'text-[1.25rem] leading-normal',
  6: 'text-[1rem] leading-normal',
}

export function Heading({ level = 2, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as const

  return (
    <Tag
      className={`
        font-serif font-medium text-[#3A3632]
        ${levelClasses[level]}
        ${className}
      `.trim()}
    >
      {children}
    </Tag>
  )
}
