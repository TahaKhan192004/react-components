import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { neutral } from '@/tokens'

interface ActionRowProps {
  icon?: LucideIcon
  iconColor?: string
  label: string
  sub?: string
  right?: ReactNode
  onClick?: () => void
}

// Generic list row: icon + label/sub + right slot. Soft bg, bordered, full-width button.
export function ActionRow({ icon: Icon, iconColor, label, sub, right, onClick }: ActionRowProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[12px] transition"
      style={{ background: neutral.soft, border: `1px solid ${neutral.border}` }}
    >
      {Icon && (
        <Icon size={15} color={iconColor ?? neutral.sub} />
      )}
      <div className="flex-1 min-w-0">
        <div className="font-semibold truncate">{label}</div>
        {sub && <div className="text-[10.5px] truncate" style={{ color: neutral.sub }}>{sub}</div>}
      </div>
      {right ?? <ArrowRight size={14} color={neutral.faint} />}
    </button>
  )
}
