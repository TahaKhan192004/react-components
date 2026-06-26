import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { neutral, primary } from '@/tokens'

interface BtnProps {
  children: ReactNode
  onClick?: () => void
  dark?: boolean
  icon?: LucideIcon
  disabled?: boolean
}

export function Btn({ children, onClick, dark, icon: Icon, disabled }: BtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition disabled:opacity-40"
      style={
        dark
          ? { background: primary.navy, color: '#fff' }
          : { background: neutral.card, color: neutral.ink, border: `1px solid ${neutral.border}` }
      }
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  )
}
