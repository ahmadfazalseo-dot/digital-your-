import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  text: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export function Toast({ toasts, removeToast }: ToastProps) {
  return (
    <div id="toast-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full h-auto">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl glassmorphic shadow-[0_10px_35px_rgba(0,0,0,0.4)] border border-white/10"
          >
            <div className="flex items-center gap-3">
              {t.type === "success" ? (
                <CheckCircle2 id="toast-succ" className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <AlertTriangle id="toast-err" className="w-5 h-5 text-amber-500 shrink-0" />
              )}
              <span className="text-sm font-medium text-zinc-100 leading-tight">{t.text}</span>
            </div>
            <button
              id={`close-${t.id}`}
              onClick={() => removeToast(t.id)}
              className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
