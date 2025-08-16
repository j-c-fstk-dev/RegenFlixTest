import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "card-regen",
          hover && "hover:shadow-regen-hover hover:-translate-y-1",
          className
        )}
        {...props}
        data-oid="3a:krv5" />);


  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
    data-oid="8a.lf88" />


);

CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) =>
  <h3
    ref={ref}
    className={cn(
      "text-heading text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
    data-oid="hy.uses" />

);

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) =>
  <p
    ref={ref}
    className={cn("text-body text-sm text-neutral-medium-gray", className)}
    {...props}
    data-oid="_irxbnd" />

);

CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
    data-oid="vbjrs.5" />


);

CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
    data-oid="290qafh" />


);

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent };