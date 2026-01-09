import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border-2 px-s py-xs text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative',
  {
    variants: {
      variant: {
        default: 'border-foreground bg-background text-foreground',
        secondary: 'border-secondary bg-background text-foreground',
        destructive: 'border-destructive bg-background text-destructive',
        outline: 'text-foreground border-foreground/30 font-semibold',
        filled: 'border-foreground bg-foreground text-background shadow-sm grainy-gradient',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
