import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { neutral, primary } from '@/tokens'

interface PanelCardProps {
  title: string
  icon: LucideIcon
  children: ReactNode
}

export function PanelCard({ title, icon: Icon, children }: PanelCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${neutral.border}`, background: neutral.card }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: neutral.border, background: neutral.soft }}
      >
        <Icon size={15} color={primary.accent} />
        <h3 className="text-[12.5px] font-bold" style={{ color: neutral.ink }}>{title}</h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}
