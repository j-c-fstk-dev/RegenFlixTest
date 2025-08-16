"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode } from
"react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }} data-oid="4nr4dhx">
      {children}
      <ToastContainer
        toasts={toasts}
        onRemove={removeToast}
        data-oid="6.zkd8p" />

    </ToastContext.Provider>);

}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed top-4 right-4 z-50 space-y-2" data-oid="tm1h4mb">
      {toasts.map((toast) =>
      <ToastItem
        key={toast.id}
        toast={toast}
        onRemove={onRemove}
        data-oid="lnx93_0" />

      )}
    </div>,
    document.body
  );
}

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  const typeStyles = {
    success: "bg-success text-white",
    error: "bg-error text-white",
    warning: "bg-warning text-black",
    info: "bg-info text-white"
  };

  const icons = {
    success:
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="mkg_9gx">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
        data-oid="m4nm_c." />

      </svg>,


    error:
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="i5aj6ox">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
        data-oid="m4fyixb" />

      </svg>,


    warning:
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="mks_sk5">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
        data-oid="b2s-jsz" />

      </svg>,


    info:
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="3o5s47q">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        data-oid="2llwel6" />

      </svg>

  };

  return (
    <div
      className={cn(
        "flex items-start space-x-3 p-4 rounded-regen shadow-regen-hover min-w-80 max-w-md animate-slide-up",
        typeStyles[toast.type]
      )}
      data-oid="vtyh.h7">

      <div className="flex-shrink-0" data-oid="3bfjq7g">
        {icons[toast.type]}
      </div>
      <div className="flex-1 min-w-0" data-oid="r.:vpas">
        <p className="font-medium text-sm" data-oid="3yxaq_1">
          {toast.title}
        </p>
        {toast.message &&
        <p className="mt-1 text-sm opacity-90" data-oid="2czox39">
            {toast.message}
          </p>
        }
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-colors"
        data-oid="b7-:5d_">

        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          data-oid="2mle.j.">

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
            data-oid="qpr57gq" />

        </svg>
      </button>
    </div>);

}