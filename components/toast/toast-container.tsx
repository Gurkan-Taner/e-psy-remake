"use client";

import { useEffect, useState } from "react";
import { Toast, ToastType, useToast } from "@/components/toast/toast-context";

const icons: Record<ToastType, React.ReactNode> = {
  success: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  error: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  warning: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  info: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
};

const typeStyles: Record<
  ToastType,
  { container: string; icon: string; bar: string; iconBg: string }
> = {
  success: {
    container: "border-[#91A59B] bg-[#E6EAE8]",
    icon: "text-white",
    iconBg: "bg-[#91A59B]/30",
    bar: "bg-[rgb(98,114,106)]",
  },
  error: {
    container: "bg-[rgb(50,59,54)] text-white",
    icon: "text-white",
    iconBg: "",
    bar: "",
  },
  warning: {
    container: "border-[#c9a96e] bg-[#faf4e8]",
    icon: "text-[#7a5a1e]",
    iconBg: "",
    bar: "",
  },
  info: {
    container: "bg-[rgb(50,59,54)] text-white",
    icon: "text-white",
    iconBg: "bg-[rgb(98,114,106)]/20",
    bar: "bg-[rgb(67,78,72)]",
  },
};

function ToastItem({ toast }: { toast: Toast }) {
  const { removeToast } = useToast();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const style = typeStyles[toast.type];
  const duration = toast.duration ?? 4000;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => removeToast(toast.id), 350);
  };

  const [progress, setProgress] = useState(100);
  useEffect(() => {
    if (duration <= 0) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (remaining === 0) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      onClick={dismiss}
      style={{
        transform:
          visible && !leaving
            ? "translateX(0) scale(1)"
            : "translateX(110%) scale(0.95)",
        opacity: visible && !leaving ? 1 : 0,
        transition:
          "transform 0.35s cubic-bezier(0.34,1.4,0.64,1), opacity 0.3s ease",
      }}
      className={`
        relative w-80 rounded-xl border border-slate-300/40 shadow-lg cursor-pointer overflow-hidden
        select-none group
        ${style.container}
      `}
    >
      <div className="flex gap-3 px-4 pt-4 pb-5 items-center">
        <div
          className={`mt-0.5 flex-shrink-0 rounded-lg p-2 ${style.iconBg} ${style.icon}`}
        >
          {icons[toast.type]}
        </div>

        <div className="flex-1 min-w-0">
          {toast.title && (
            <p
              className="text-sm font-semibold leading-snug truncate text-white"
              style={{
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {toast.title}
            </p>
          )}
          <p
            className="text-sm leading-snug text-white"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: toast.title ? "2px" : 0,
            }}
          >
            {toast.message}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity mt-0.5"
          style={{ color: "rgb(50,59,54)" }}
          aria-label="Fermer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {duration > 0 && (
        <div
          className={`absolute bottom-0 left-0 h-[3px] rounded-full transition-none ${style.bar} bg-white/60`}
          style={{ width: `${progress}%`, opacity: 1 }}
        />
      )}
    </div>
  );
}

export function ToastContainer() {
  const { toasts } = useToast();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div
        aria-live="polite"
        className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 items-end pointer-events-none"
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} />
          </div>
        ))}
      </div>
    </>
  );
}
