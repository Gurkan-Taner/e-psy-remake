"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from "react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  message: string;
  title?: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counterRef = useRef(0);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    ({ message, title, type, duration = 4000 }: Omit<Toast, "id">) => {
      counterRef.current += 1;
      const id = `toast-${Date.now()}-${counterRef.current}`;
      setToasts((prev) => [...prev, { id, message, title, type, duration }]);
      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
    },
    [removeToast],
  );

  const success = useCallback(
    (message: string, title?: string) =>
      addToast({ message, title, type: "success" }),
    [addToast],
  );
  const error = useCallback(
    (message: string, title?: string) =>
      addToast({ message, title, type: "error" }),
    [addToast],
  );
  const warning = useCallback(
    (message: string, title?: string) =>
      addToast({ message, title, type: "warning" }),
    [addToast],
  );
  const info = useCallback(
    (message: string, title?: string) =>
      addToast({ message, title, type: "info" }),
    [addToast],
  );

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, success, error, warning, info }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
