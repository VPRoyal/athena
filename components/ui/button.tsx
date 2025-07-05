import * as React from "react"

export type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
export type Size = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean // optional, remove if you ditch Slot behavior
}

export const getClasses = (variant: Variant = "default", size: Size = "default") => {
  const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants: Record<Variant, string> = {
    default: "bg-background text-foreground hover:bg-background/40 cursor-pointer",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer",
    outline: "border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background cursor-pointer",
    secondary: "bg-background-secondary text-foreground-secondary hover:bg-background-secondary/80 cursor-pointer",
    ghost: "hover:bg-accent hover:text-accent-foreground cursor-pointer",
    link: "text-primary underline-offset-4 hover:underline cursor-pointer",
  }

  const sizes: Record<Size, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  }

  return `${base} ${variants[variant]} ${sizes[size]}`
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const classes = `${getClasses(variant, size)} ${className}`.trim()
    return <button ref={ref} className={classes} {...props} />
  }
)

Button.displayName = "Button"
export default Button; 
