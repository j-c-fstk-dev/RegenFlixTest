"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  size = "md"
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-oid="u7-5.6m">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        data-oid="abmie7a" />


      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full bg-white dark:bg-neutral-dark-navy rounded-regen-lg shadow-regen-hover animate-scale-in",
          sizeClasses[size],
          className
        )}
        data-oid="g8841fh">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-medium-gray hover:text-neutral-dark-navy dark:hover:text-white transition-regen rounded-regen hover:bg-neutral-light-gray dark:hover:bg-neutral-medium-gray/20"
          data-oid="pilz70h">

          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="o0l83dx">

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              data-oid="bbl77u7" />

          </svg>
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}

interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

export function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-b border-neutral-light-gray dark:border-neutral-medium-gray",
        className
      )}
      data-oid="x2ltlw9">

      {children}
    </div>);

}

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={cn("px-6 py-4", className)} data-oid="5o9gq6u">
      {children}
    </div>);

}

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-neutral-light-gray dark:border-neutral-medium-gray flex justify-end space-x-3",
        className
      )}
      data-oid="m7o_o5k">

      {children}
    </div>);

}