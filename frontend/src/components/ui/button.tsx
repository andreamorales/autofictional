import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// Local helper so noise SVG stays scoped to the button component only
const getNoiseTextureUrl = (baseFrequency: number = 0.9, numOctaves: number = 4): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

// Inject grainy gradient styles once
if (typeof document !== 'undefined' && !document.getElementById('button-grainy-gradient-styles')) {
  const style = document.createElement('style')
  style.id = 'button-grainy-gradient-styles'
  style.textContent = `
    .button-grainy-gradient::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: inherit;
      z-index: -1;
      background-image: 
        linear-gradient(
          135deg,
          #ff0000 0%,
          #ff0000 45%,
          #00d4ff 55%,
          #00d4ff 100%
        ),
        ${getNoiseTextureUrl()};
      background-size: 100% 100%, 100px 100px;
      /* Keep rainbow colors intact; blend only the noise layer */
      background-blend-mode: normal, overlay;
      mask-image: radial-gradient(
        ellipse 100% 100% at 50% 50%,
        black 0%,
        black 15%,
        rgba(0,0,0,0.9) 35%,
        rgba(0,0,0,0.6) 55%,
        rgba(0,0,0,0.3) 75%,
        rgba(0,0,0,0.1) 90%,
        transparent 100%
      );
      -webkit-mask-image: radial-gradient(
        ellipse 100% 100% at 50% 50%,
        black 0%,
        black 15%,
        rgba(0,0,0,0.9) 35%,
        rgba(0,0,0,0.6) 55%,
        rgba(0,0,0,0.3) 75%,
        rgba(0,0,0,0.1) 90%,
        transparent 100%
      );
      pointer-events: none;
    }
    .button-grainy-gradient > * {
      position: relative;
      z-index: 1;
    }
  `
  document.head.appendChild(style)
}

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-s whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative disabled:[&::before]:hidden',
  {
    variants: {
      variant: {
        default:
          'border-2 border-foreground text-background hover:opacity-90 font-bold disabled:border-foreground/30 disabled:bg-muted disabled:text-foreground/40 grainy-grey',
        destructive:
          'border-2 border-destructive bg-background text-destructive hover:bg-destructive/10 font-bold disabled:border-destructive/30 disabled:bg-muted disabled:text-destructive/40 button-grainy-gradient',
        outline:
          'border-2 border-foreground bg-background hover:bg-accent hover:text-accent-foreground font-bold disabled:border-foreground/30 disabled:text-foreground/40 button-grainy-gradient',
        secondary:
          'border-2 border-secondary bg-background text-secondary hover:bg-secondary/10 font-bold disabled:border-secondary/30 disabled:text-secondary/40 button-grainy-gradient',
        filled:
          'border-2 border-foreground text-background hover:opacity-90 shadow-sm font-bold disabled:border-foreground/30 disabled:bg-muted disabled:text-foreground/40 grainy-grey',
        ghost:
          'hover:bg-accent hover:text-accent-foreground border-2 border-transparent disabled:text-foreground/40',
        link: 'text-foreground underline-offset-4 hover:underline font-bold disabled:text-foreground/40',
      },
      size: {
        default: 'h-10 px-l py-s',
        sm: 'h-9 rounded-md px-m',
        lg: 'h-11 rounded-md px-2xl text-base',
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
