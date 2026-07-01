import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { neutral, primary } from '@/tokens'

interface CardHeaderProps {
  title: string
  icon?: LucideIcon
  action?: ReactNode
}

export function CardHeader({ title, icon: Icon, action }: CardHeaderProps) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 border-b"
      style={{ borderColor: neutral.border, background: neutral.soft }}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon size={15} color={primary.accent} />}
        <span className="text-[12.5px] font-bold" style={{ color: neutral.ink }}>{title}</span>
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  )
}
