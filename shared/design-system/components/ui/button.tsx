import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// Local helper so noise SVG stays scoped to the button component only
const getNoiseTextureUrl = (baseFrequency: number = 0.9, numOctaves: number = 4): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

// Grainy gradient styles removed

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-s whitespace-nowrap text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border-2 border-foreground bg-gradient-to-br from-foreground to-foreground/90 text-background hover:opacity-90 font-bold disabled:border-foreground/30 disabled:bg-muted disabled:text-foreground/40',
        destructive:
          'border-2 border-destructive bg-gradient-to-br from-destructive/10 to-destructive/5 text-foreground hover:from-destructive/15 hover:to-destructive/10 font-bold disabled:border-destructive/30 disabled:bg-muted disabled:text-foreground/40',
        outline:
          'border-2 border-foreground bg-gradient-to-br from-background to-muted/50 text-foreground hover:from-accent/20 hover:to-accent/10 hover:text-accent-foreground font-bold disabled:border-foreground/30 disabled:text-foreground/40',
        secondary:
          'border-2 border-secondary bg-gradient-to-br from-secondary/10 to-secondary/5 text-foreground hover:from-secondary/15 hover:to-secondary/10 font-bold disabled:border-secondary/30 disabled:text-foreground/40',
        filled:
          'border-2 border-foreground bg-gradient-to-br from-foreground to-foreground/85 text-background hover:opacity-90 shadow-sm font-bold disabled:border-foreground/30 disabled:bg-muted disabled:text-foreground/40',
        ghost:
          'hover:bg-accent hover:text-accent-foreground border-2 border-transparent disabled:text-foreground/40',
        link: 'text-foreground underline-offset-4 hover:underline font-bold disabled:text-foreground/40',
      },
      size: {
        default: 'h-10 px-l py-s',
        sm: 'h-9 px-m',
        lg: 'h-11 px-2xl text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
