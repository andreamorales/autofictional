import { CheckCircle2, Info, Loader2Icon, X, AlertTriangle } from 'lucide-react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      icons={{
        success: <CheckCircle2 className="h-4 w-4" />,
        info: <Info className="h-4 w-4" />,
        warning: <AlertTriangle className="h-4 w-4" />,
        error: <X className="h-4 w-4" />,
        loading: <Loader2Icon className="h-4 w-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-muted group-[.toaster]:to-gray-80 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          success:
            'group toast group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-semantic-success group-[.toaster]:to-green-30 group-[.toaster]:text-semantic-success-foreground group-[.toaster]:border-semantic-success group-[.toaster]:shadow-lg',
          error:
            'group toast group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-semantic-error group-[.toaster]:to-red-40 group-[.toaster]:text-semantic-error-foreground group-[.toaster]:border-semantic-error group-[.toaster]:shadow-lg',
          warning:
            'group toast group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-semantic-alert group-[.toaster]:to-yellow-40 group-[.toaster]:text-semantic-alert-foreground group-[.toaster]:border-semantic-alert group-[.toaster]:shadow-lg',
          info: 'group toast group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-semantic-info group-[.toaster]:to-blue-40 group-[.toaster]:text-semantic-info-foreground group-[.toaster]:border-semantic-info group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
