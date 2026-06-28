import { useRef, useState } from 'react'
import type { ToastVariant } from '@/components/Toast'

export interface ToastItem {
  id: string
  variant: ToastVariant
  message: string
}

/**
 * Manages toast state for use with <ToastStack>.
 *
 * @example
 * function App() {
 *   const { toast, toasts, dismiss } = useToast()
 *   return (
 *     <>
 *       <button onClick={() => toast.success('Saved!')}>Save</button>
 *       <ToastStack toasts={toasts} onDismiss={dismiss} />
 *     </>
 *   )
 * }
 */
export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const idRef = useRef(0)

  function dismiss(id: string) {
    setToasts(p => p.filter(t => t.id !== id))
  }

  function add(variant: ToastVariant, message: string, duration = 4000) {
    const id = String(++idRef.current)
    setToasts(p => [...p, { id, variant, message }])
    if (duration > 0) {
      setTimeout(() => dismiss(id), duration)
    }
  }

  const toast = {
    success: (msg: string, duration?: number) => add('success', msg, duration),
    info:    (msg: string, duration?: number) => add('info',    msg, duration),
    warning: (msg: string, duration?: number) => add('warning', msg, duration),
    danger:  (msg: string, duration?: number) => add('danger',  msg, duration),
  }

  return { toast, toasts, dismiss }
}
