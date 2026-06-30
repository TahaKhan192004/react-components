import type { ReactNode } from 'react'
import { primary, neutral } from '@/tokens'

interface WidgetCardProps {
  title: string
  onOpen?: () => void
  children: ReactNode
}

export function WidgetCard({ title, onOpen, children }: WidgetCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: neutral.border, background: neutral.soft }}
      >
        <div className="text-[12.5px] font-bold" style={{ color: neutral.ink }}>{title}</div>
        {onOpen && (
          <button onClick={onOpen} className="text-[11px] font-semibold" style={{ color: primary.indigo }}>
            Open →
          </button>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}
