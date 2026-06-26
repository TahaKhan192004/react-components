import { AlertTriangle, Check } from 'lucide-react'
import { neutral } from '@/tokens'
import { EscalationRow } from './EscalationRow'
import type { EscalationItem } from './EscalationRow'

interface EscalationsPanelProps {
  items: EscalationItem[]
}

export function EscalationsPanel({ items }: EscalationsPanelProps) {
  return (
    <div className="rounded-2xl p-4" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div className="mb-2 flex items-center gap-1.5 text-[13px] font-bold">
        <AlertTriangle size={15} color="#EA580C" />
        Escalations — outstanding too long on COO / CFO / CCO
      </div>

      {items.length === 0 ? (
        <div className="flex items-center gap-2 py-2 text-[12px]" style={{ color: '#16A34A' }}>
          <Check size={15} />
          Nothing overdue across COO, CFO and CCO.
        </div>
      ) : (
        <div className="space-y-1.5">
          {items.map((e, i) => <EscalationRow key={i} {...e} />)}
        </div>
      )}

      <p className="mt-2 text-[10.5px]" style={{ color: neutral.faint }}>
        Only items past their threshold surface here; the CEO doesn't see the full task lists. Each row opens the owning dashboard.
      </p>
    </div>
  )
}

export type { EscalationItem }
