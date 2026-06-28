import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { neutral } from '@/tokens'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  footer?: ReactNode
}

const sizeMap: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
}

export function Modal({ open, onClose, title, size = 'md', children, footer }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(14,20,56,0.5)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className={`flex w-full flex-col overflow-hidden rounded-2xl shadow-xl ${sizeMap[size]}`}
        style={{ background: neutral.card, maxHeight: 'calc(100vh - 2rem)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div
            className="flex flex-shrink-0 items-center justify-between px-5 py-4"
            style={{ borderBottom: `1px solid ${neutral.border}` }}
          >
            <span className="text-[14px] font-bold" style={{ color: neutral.ink }}>
              {title}
            </span>
            <button
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center rounded-lg transition hover:opacity-70"
              style={{ background: neutral.soft }}
            >
              <X size={14} color={neutral.sub} />
            </button>
          </div>
        )}

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            className="flex flex-shrink-0 items-center justify-end gap-2 px-5 py-3"
            style={{ borderTop: `1px solid ${neutral.border}`, background: neutral.soft }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
