export type DisplayHeadingProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  headingStyle?: 'roman' | 'italic'
  color?: 'light' | 'dark'
} & Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'>

const colorClasses: Record<NonNullable<DisplayHeadingProps['color']>, string> = {
  light: 'text-[#FAF8F5]',
  dark: 'text-[#2A2623]',
}

const headingStyleClasses: Record<NonNullable<DisplayHeadingProps['headingStyle']>, string> = {
  roman: 'font-normal not-italic',
  italic: 'font-normal italic',
}

export function DisplayHeading({
  children,
  as: Tag = 'h2',
  headingStyle = 'roman',
  color = 'dark',
  className = '',
  style,
  ...rest
}: DisplayHeadingProps) {
  return (
    <Tag
      className={`
        font-serif
        ${colorClasses[color]}
        ${headingStyleClasses[headingStyle]}
        ${className}
      `.trim()}
      style={{
        fontSize: 'clamp(3rem, 8vw, 6.5rem)',
        lineHeight: '1.05',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
