import type { ReactNode } from 'react'

type SplitSectionProps = {
  imageSlot: ReactNode
  textSlot: ReactNode
  imagePosition?: 'left' | 'right'
  crossAxisAlign?: 'start' | 'center' | 'stretch'
  weight?: '50-50' | '60-40' | '40-60'
  className?: string
}

const alignClasses = {
  start: 'md:items-start',
  center: 'md:items-center',
  stretch: 'md:items-stretch',
} as const

const weightClasses = {
  '50-50': { image: 'md:w-1/2', text: 'md:w-1/2' },
  '60-40': { image: 'md:w-3/5', text: 'md:w-2/5' },
  '40-60': { image: 'md:w-2/5', text: 'md:w-3/5' },
} as const

export function SplitSection({
  imageSlot,
  textSlot,
  imagePosition = 'left',
  crossAxisAlign = 'center',
  weight = '60-40',
  className = '',
}: SplitSectionProps) {
  const isImageRight = imagePosition === 'right'
  const cols = weightClasses[weight]

  return (
    <div
      className={`flex flex-col gap-0 md:flex-row ${alignClasses[crossAxisAlign]} ${isImageRight ? 'md:flex-row-reverse' : ''} ${className}`}
    >
      <div className={`w-full ${cols.image}`}>{imageSlot}</div>
      <div className={`w-full ${cols.text}`}>{textSlot}</div>
    </div>
  )
}
