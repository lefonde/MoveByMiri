export type EyebrowLabelProps = {
  children: React.ReactNode
  color?: 'olive' | 'neutral'
  className?: string
}

const colorClasses: Record<NonNullable<EyebrowLabelProps['color']>, string> = {
  olive: 'text-[#556B2F]',
  neutral: 'text-[#968A7B]',
}

export function EyebrowLabel({ children, color = 'olive', className = '' }: EyebrowLabelProps) {
  return (
    <span
      className={`font-sans text-xs font-semibold uppercase tracking-widest ${colorClasses[color]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
