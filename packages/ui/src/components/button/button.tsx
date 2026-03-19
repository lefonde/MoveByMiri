import { forwardRef } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'forest' | 'bone'
  size?: 'sm' | 'md' | 'lg'
  /** When provided, renders as an <a> element instead of <button> */
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#556B2F] text-white hover:bg-[#4A5D29] active:bg-[#3F5023]',
  secondary: 'bg-[#C27E60] text-white hover:bg-[#B37156] active:bg-[#A4644C]',
  ghost:
    'bg-transparent text-[#2D4A2E] border border-[#2D4A2E] hover:bg-[#2D4A2E]/10 active:bg-[#2D4A2E]/20',
  forest: 'bg-[#2D4A2E] text-[#FAF8F5] hover:bg-[#2D4A2E]/85 active:bg-[#2D4A2E]/70',
  bone: 'bg-[#FAF8F5] text-[#2A2218] hover:bg-[#C27E60] hover:text-white active:bg-[#C27E60]/85 active:text-white focus-visible:ring-[#FAF8F5] focus-visible:ring-offset-[#2D4A2E]',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-6 py-3.5 text-xs uppercase tracking-[0.14em]',
  md: 'px-9 py-3.5 text-xs uppercase tracking-[0.14em]',
  lg: 'px-11 py-4 text-sm uppercase tracking-[0.14em]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', href, target, rel, children, className = '', ...rest },
  ref,
) {
  const cls = `
      inline-flex items-center justify-center font-sans font-medium
      rounded-[2rem] transition-[transform,background-color,color,box-shadow] duration-150 ease-in-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D4A2E]
      disabled:opacity-50 disabled:pointer-events-none
      motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.97]
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `.trim()

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
        className={cls}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  )
})
