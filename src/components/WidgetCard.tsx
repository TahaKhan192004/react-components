import type { ReactNode } from 'react'
import { primary, neutral } from '@/tokens'

interface WidgetCardProps {
  title: string
  onOpen?: () => void
  children: ReactNode
}

export function WidgetCard({ title, onOpen, children }: WidgetCardProps) {
  return (
    <div className="rounded-2xl p-4" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div className="mb-2.5 flex items-center justify-between">
        <div className="text-[13px] font-bold">{title}</div>
        {onOpen && (
          <button onClick={onOpen} className="text-[11px] font-semibold" style={{ color: primary.indigo }}>
            Open →
          </button>
        )}
      </div>
      {children}
    </div>
  )
}
