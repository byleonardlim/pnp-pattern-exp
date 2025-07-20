import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { MarketChartButtonProps } from "../../types/market.types"

export const Button = forwardRef<HTMLButtonElement, MarketChartButtonProps>(
  ({ 
    className, 
    variant = 'default',
    size = 'default',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    ...props 
  }, ref) => {
    const sizeClasses = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    }

    const buttonClasses = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      variant === 'chartAction' && 'bg-market-accent hover:bg-market-accent/90 text-white',
      variant === 'chartControl' && 'bg-transparent hover:bg-accent/50',
      variant === 'outline' && 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
      variant === 'link' && 'text-primary underline-offset-4 hover:underline',
      sizeClasses[size],
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'MarketChartButton'
