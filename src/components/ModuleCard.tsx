import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { primary, neutral } from '@/tokens'

const gpmTone = (v: number) =>
  v >= 20 ? '#16A34A' : v >= 14 ? '#EA580C' : '#B91C1C'

interface ModuleCardProps {
  icon: LucideIcon
  label: string
  gpm: number
  inbound: number
  outbound: number
  onOpen: () => void
}

export function ModuleCard({ icon: Icon, label, gpm, inbound, outbound, onOpen }: ModuleCardProps) {
  const tone = gpmTone(gpm)

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: neutral.border, background: neutral.soft }}
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: neutral.card }}>
            <Icon size={15} color={primary.accent} />
          </div>
          <span className="text-[12.5px] font-bold">{label}</span>
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[11px] font-bold"
          style={{ color: tone, background: tone + '1A' }}
        >
          {gpm.toFixed(1)}% GPM
        </span>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl px-3 py-2" style={{ background: neutral.soft }}>
            <div className="text-[20px] font-bold leading-none">{inbound}</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide" style={{ color: neutral.faint }}>Inbound</div>
          </div>
          <div className="rounded-xl px-3 py-2" style={{ background: neutral.soft }}>
            <div className="text-[20px] font-bold leading-none">{outbound}</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide" style={{ color: neutral.faint }}>Outbound</div>
          </div>
        </div>

        <button onClick={onOpen} className="mt-3 flex items-center gap-1 text-[11px] font-semibold" style={{ color: primary.accent }}>
          Open dashboard <ArrowRight size={13} />
        </button>
      </div>
    </div>
  )
}
