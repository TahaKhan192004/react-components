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
      className="rounded-2xl bg-white p-4"
      style={{ border: `1px solid ${neutral.border}` }}
    >
      <div className="mb-3 flex items-center gap-2">
        <Icon size={15} color={primary.accent} />
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      {children}
    </div>
  )
}
