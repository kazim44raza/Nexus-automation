'use client'

import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-accent to-primary text-white shadow-md hover:shadow-lg hover:scale-[1.02]',
  secondary: 'bg-transparent border-2 border-gray-200 text-gray-700 hover:border-accent hover:bg-accent/5 hover:text-accent',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-medium',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading, 
    leftIcon,
    rightIcon,
    fullWidth, 
    className, 
    children, 
    disabled, 
    as = 'button',
    ...props 
  }, ref) => {
    
    const Component = as as any
    
    return (
      <Component
        ref={ref}
        disabled={as === 'button' ? (disabled || loading) : undefined}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
        {!loading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </Component>
    )
  }
)

Button.displayName = 'Button'
