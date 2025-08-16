import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent";
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({
  progress,
  className,
  size = "md",
  color = "primary",
  showLabel = false,
  label
}: ProgressBarProps) {
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  };

  const colorClasses = {
    primary: "bg-primary-300",
    secondary: "bg-accent-sky-blue",
    accent: "bg-accent-gold"
  };

  const backgroundClasses = {
    primary: "bg-primary-100",
    secondary: "bg-accent-sky-blue/20",
    accent: "bg-accent-gold/20"
  };

  return (
    <div className={cn("w-full", className)} data-oid="8no:k4v">
      {showLabel &&
      <div
        className="flex justify-between items-center mb-2"
        data-oid="yly4ut0">

          <span
          className="text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray"
          data-oid="6fls17t">

            {label || "Progresso"}
          </span>
          <span className="text-sm text-neutral-medium-gray" data-oid=".j28l55">
            {Math.round(progress)}%
          </span>
        </div>
      }
      <div
        className={cn(
          "w-full rounded-full overflow-hidden",
          sizeClasses[size],
          backgroundClasses[color]
        )}
        data-oid="o:.uw1u">

        <div
          className={cn(
            "h-full transition-all duration-300 ease-out rounded-full",
            colorClasses[color]
          )}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          data-oid="4dtl_ab" />

      </div>
    </div>);

}