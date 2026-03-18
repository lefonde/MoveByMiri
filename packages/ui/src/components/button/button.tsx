import { forwardRef } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#556B2F] text-white hover:bg-[#4A5D29] active:bg-[#3F5023]',
  secondary: 'bg-[#C27E60] text-white hover:bg-[#B37156] active:bg-[#A4644C]',
  ghost:
    'bg-transparent text-[#556B2F] border border-[#556B2F] hover:bg-[#556B2F]/10 active:bg-[#556B2F]/20',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', children, className = '', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`
          inline-flex items-center justify-center font-sans font-medium
          rounded-[2rem] transition-all duration-150 ease-in-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#556B2F]
          disabled:opacity-50 disabled:pointer-events-none
          motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.97]
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `.trim()}
      {...rest}
    >
      {children}
    </button>
  )
})
