import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border-2 p-l [&>svg~*]:pl-xl [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-l [&>svg]:top-l font-medium',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-foreground/20 [&>svg]:text-foreground',
        destructive:
          'border-semantic-error/80 bg-semantic-error/10 dark:border-semantic-error [&>svg]:text-semantic-error-dark [&>h5]:text-semantic-error-dark [&>div]:text-semantic-error-dark',
        success:
          'border-semantic-success/80 bg-semantic-success/10 dark:border-semantic-success [&>svg]:text-semantic-success-dark [&>h5]:text-semantic-success-dark [&>div]:text-semantic-success-dark',
        precaution:
          'border-semantic-precaution/80 bg-semantic-precaution/10 dark:border-semantic-precaution [&>svg]:text-semantic-precaution-dark [&>h5]:text-semantic-precaution-dark [&>div]:text-semantic-precaution-dark',
        alert:
          'border-semantic-alert/80 bg-semantic-alert/10 dark:border-semantic-alert [&>svg]:text-semantic-alert-dark [&>h5]:text-semantic-alert-dark [&>div]:text-semantic-alert-dark',
        info: 'border-semantic-info/80 bg-semantic-info/10 dark:border-semantic-info [&>svg]:text-semantic-info-dark [&>h5]:text-semantic-info-dark [&>div]:text-semantic-info-dark',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-xs font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
