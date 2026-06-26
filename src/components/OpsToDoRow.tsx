import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { primary, neutral } from '@/tokens'

export interface OpsAction {
  count: number
  label: string
  tone: string
  onOpen: () => void
}

export function OpsToDoRow({ count, label, tone, onOpen }: OpsAction) {
  return (
    <div className="rounded-2xl p-4" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-black text-white"
            style={{ background: tone }}
          >
            {count}
          </span>
          <div className="text-[12.5px] font-semibold">{label}</div>
        </div>
        <button
          onClick={onOpen}
          className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[11px] font-semibold text-white"
          style={{ background: primary.navy }}
        >
          Open <ArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}

export function OpsToDoList({ actions }: { actions: OpsAction[] }) {
  if (actions.length === 0) {
    return (
      <div className="rounded-2xl p-4" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
        <div className="flex items-center gap-2 py-2 text-[13px] font-semibold" style={{ color: '#16A34A' }}>
          <CheckCircle2 size={16} />
          No open actions — all clear.
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2">
      {actions.map((a, i) => <OpsToDoRow key={i} {...a} />)}
    </div>
  )
}
