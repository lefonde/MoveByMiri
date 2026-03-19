export type EyebrowLabelProps = {
  children: React.ReactNode
  color?: 'olive' | 'neutral' | 'forest' | 'sage' | 'terra'
  className?: string
}

const colorClasses: Record<NonNullable<EyebrowLabelProps['color']>, string> = {
  olive: 'text-[#556B2F]',
  neutral: 'text-[#968A7B]',
  forest: 'text-[#2D4A2E]',
  sage: 'text-[#6B8B4E]',
  terra: 'text-[#C27E60]',
}

export function EyebrowLabel({ children, color = 'olive', className = '' }: EyebrowLabelProps) {
  return (
    <span
      className={`font-sans font-semibold uppercase ${colorClasses[color]} ${className}`.trim()}
      style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
    >
      {children}
    </span>
  )
}
