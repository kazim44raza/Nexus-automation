import { cn } from '@/lib/utils'

type BadgeVariant = 'primary' | 'accent' | 'warm' | 'neutral' | 'dark'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  dot?: boolean
}

const variantMap: Record<BadgeVariant, string> = {
  primary: 'badge-primary',
  accent: 'badge-accent',
  warm: 'badge-warm',
  neutral: 'badge-neutral',
  dark: 'badge bg-white/10 text-white/80',
}

export function Badge({ variant = 'neutral', children, className, dot }: BadgeProps) {
  return (
    <span className={cn(variantMap[variant], className)}>
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full',
          variant === 'primary' && 'bg-primary',
          variant === 'accent' && 'bg-accent',
          variant === 'warm' && 'bg-warm',
          variant === 'neutral' && 'bg-text-muted',
          variant === 'dark' && 'bg-white/50',
        )} />
      )}
      {children}
    </span>
  )
}
