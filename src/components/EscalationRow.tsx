import { Clock, ArrowRight } from 'lucide-react'
import { primary, neutral } from '@/tokens'

const deptTone = (dept: string) =>
  dept === 'COO' ? primary.indigo :
  dept === 'CFO' ? '#0E7490' :
  '#7C3AED'

const sevTone = (days: number) =>
  days >= 10 ? '#B91C1C' : days >= 6 ? '#EA580C' : '#64748B'

export interface EscalationItem {
  dept: string
  text: string
  days: number
  onClick: () => void
}

export function EscalationRow({ dept, text, days, onClick }: EscalationItem) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[12px]"
      style={{ background: neutral.soft, border: `1px solid ${neutral.border}` }}
    >
      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: deptTone(dept) }}>
        {dept}
      </span>
      <span className="flex-1 font-semibold">{text}</span>
      <span className="flex items-center gap-1 text-[11px] font-bold" style={{ color: sevTone(days) }}>
        <Clock size={12} />{days}d
      </span>
      <ArrowRight size={14} color={neutral.sub} />
    </button>
  )
}
