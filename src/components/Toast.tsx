import { X, CheckCircle2, AlertTriangle, Info, XCircle } from 'lucide-react'

export type ToastVariant = 'success' | 'warning' | 'danger' | 'info'

const config: Record<ToastVariant, { bg: string; border: string; icon: typeof CheckCircle2; iconColor: string }> = {
  success: { bg: '#DCFCE7', border: '#86EFAC',  icon: CheckCircle2,   iconColor: '#16A34A' },
  warning: { bg: '#FEF3C7', border: '#FCD34D',  icon: AlertTriangle,  iconColor: '#D97706' },
  danger:  { bg: '#FEE2E2', border: '#FCA5A5',  icon: XCircle,        iconColor: '#B91C1C' },
  info:    { bg: '#EEF0FE', border: '#A5B4FC',  icon: Info,           iconColor: '#6366F1' },
}

interface ToastProps {
  variant?: ToastVariant
  message: string
  onDismiss?: () => void
}

export function Toast({ variant = 'info', message, onDismiss }: ToastProps) {
  const c = config[variant]
  const Icon = c.icon
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg text-[12px] font-semibold"
      style={{ background: c.bg, border: `1px solid ${c.border}`, minWidth: 260, maxWidth: 380 }}
      role="alert"
    >
      <Icon size={15} color={c.iconColor} style={{ flexShrink: 0 }} />
      <span className="flex-1" style={{ color: '#1B2440' }}>{message}</span>
      {onDismiss && (
        <button onClick={onDismiss} className="ml-1 opacity-50 hover:opacity-100 transition">
          <X size={13} />
        </button>
      )}
    </div>
  )
}

// Stack for rendering multiple toasts — mount once in your app root
interface ToastStackProps {
  toasts: { id: string; variant?: ToastVariant; message: string }[]
  onDismiss: (id: string) => void
}

export function ToastStack({ toasts, onDismiss }: ToastStackProps) {
  if (!toasts.length) return null
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      {toasts.map(t => (
        <Toast key={t.id} variant={t.variant} message={t.message} onDismiss={() => onDismiss(t.id)} />
      ))}
    </div>
  )
}
