import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className
}: BadgeProps) {
  const baseClasses = "inline-flex items-center font-medium rounded-full";

  const variants = {
    primary: "bg-primary-100 text-primary-300",
    secondary:
    "bg-neutral-light-gray text-neutral-dark-navy dark:bg-neutral-medium-gray dark:text-neutral-light-gray",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error",
    info: "bg-info/10 text-info"
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base"
  };

  return (
    <span
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      data-oid="5_qxrig">

      {children}
    </span>);

}