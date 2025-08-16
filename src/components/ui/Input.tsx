import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, ...props }, ref) => {
    return (
      <div className="space-y-2" data-oid="n1dyxp2">
        {label &&
        <label
          className="text-sm font-medium text-neutral-dark-navy dark:text-neutral-light-gray"
          data-oid="mg6uhcb">

            {label}
          </label>
        }
        <input
          type={type}
          className={cn(
            "input-regen",
            error && "border-accent-coral focus:ring-accent-coral",
            className
          )}
          ref={ref}
          {...props}
          data-oid="4yua9w:" />


        {error &&
        <p className="text-sm text-accent-coral" data-oid="v0m:402">
            {error}
          </p>
        }
      </div>);

  }
);

Input.displayName = "Input";

export { Input };