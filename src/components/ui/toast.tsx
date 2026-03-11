'use client'

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import { useState, useEffect, useCallback, createContext, useContext } from "react"

interface ToastMessage {
    id: number
    text: string
}

interface ToastContextType {
    showToast: (text: string) => void
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} })

export function useToast() {
    return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastMessage[]>([])

    const showToast = useCallback((text: string) => {
        const id = Date.now()
        setToasts((prev) => [...prev, { id, text }])
    }, [])

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-[200] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <ToastItem
                            key={toast.id}
                            toast={toast}
                            onRemove={removeToast}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}

function ToastItem({ toast, onRemove }: { toast: ToastMessage; onRemove: (id: number) => void }) {
    useEffect(() => {
        const timer = setTimeout(() => onRemove(toast.id), 3000)
        return () => clearTimeout(timer)
    }, [toast.id, onRemove])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto flex items-center gap-3 px-5 py-3.5 bg-black/90 backdrop-blur-lg border border-amber-500/20 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] min-w-[280px]"
        >
            <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-sm text-white font-medium flex-1">{toast.text}</span>
            <button
                onClick={() => onRemove(toast.id)}
                className="text-white/40 hover:text-white transition-colors flex-shrink-0"
            >
                <X size={14} />
            </button>
        </motion.div>
    )
}
