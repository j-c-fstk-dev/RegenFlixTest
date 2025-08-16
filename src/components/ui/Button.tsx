import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "warm" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    className,
    variant = "primary",
    size = "md",
    loading,
    children,
    disabled,
    ...props
  },
  ref) =>
  {
    const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-cozy transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-sage focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-0.5";

    const variants = {
      primary:
      "bg-earth-sage hover:bg-primary-400 text-white shadow-cozy hover:shadow-cozy-hover",
      secondary:
      "bg-transparent hover:bg-earth-cream text-earth-sage border-2 border-earth-sage hover:shadow-cozy",
      warm: "bg-earth-peach hover:bg-accent-warm-gold text-white shadow-warm hover:shadow-cozy-hover",
      ghost: "bg-transparent hover:bg-earth-cream/50 text-earth-sage",
      danger:
      "bg-accent-rust hover:bg-red-600 text-white shadow-cozy hover:shadow-cozy-hover"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg"
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
        data-oid="-ioqs2m">

        {loading &&
        <div
          className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          data-oid="pf:vil2" />

        }
        {children}
      </button>);

  }
);

Button.displayName = "Button";

export { Button };