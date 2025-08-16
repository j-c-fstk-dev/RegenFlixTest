import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className
}: LoadingSpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      data-oid="hd1umr3">

      <div
        className={cn(
          "animate-spin rounded-full border-2 border-primary-100 border-t-primary-300",
          sizes[size]
        )}
        data-oid="c3qujcz" />

    </div>);

}