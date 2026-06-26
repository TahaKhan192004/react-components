import type { LucideIcon } from 'lucide-react'
import { primary, neutral } from '@/tokens'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  active: boolean
  onClick: () => void
}

export function SidebarItem({ icon: Icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className="mb-0.5 flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-left text-[12px] font-medium transition"
      style={{ background: active ? primary.indigoBg : 'transparent', color: active ? primary.indigo : neutral.sub }}
    >
      <Icon size={15} />
      {' '}
      {label}
    </button>
  )
}
