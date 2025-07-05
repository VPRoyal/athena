import * as React from "react"

type CardElementProps = React.HTMLAttributes<HTMLDivElement>

const merge = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ")

const Card = React.forwardRef<HTMLDivElement, CardElementProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={merge(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, CardElementProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={merge("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLDivElement, CardElementProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={merge("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLDivElement, CardElementProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={merge("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, CardElementProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={merge("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardElementProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={merge("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
