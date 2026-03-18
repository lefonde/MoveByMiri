export type TextProps = {
  size?: 'sm' | 'base' | 'lg'
  muted?: boolean
  children: React.ReactNode
  className?: string
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'>

const sizeClasses: Record<NonNullable<TextProps['size']>, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
}

export function Text({
  size = 'base',
  muted = false,
  children,
  className = '',
  ...rest
}: TextProps) {
  return (
    <p
      className={`
        font-sans leading-relaxed
        ${muted ? 'text-[#756A5E]' : 'text-[#3A3632]'}
        ${sizeClasses[size]}
        ${className}
      `.trim()}
      {...rest}
    >
      {children}
    </p>
  )
}
