import type { LucideIcon } from 'lucide-react'
import { neutral } from '@/tokens'

export interface Top5Item {
  label: string
  pct: number
}

interface Top5CardProps {
  title: string
  icon: LucideIcon
  iconTone: string
  items: Top5Item[]
  barTone: string
  barScale?: number
  footnote: string
}

function Bar({ pct, tone }: { pct: number; tone: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: neutral.soft }}>
      <div className="h-full rounded-full" style={{ width: `${Math.min(100, pct)}%`, background: tone }} />
    </div>
  )
}

export function Top5Card({ title, icon: Icon, iconTone, items, barTone, barScale = 4, footnote }: Top5CardProps) {
  return (
    <div className="rounded-2xl p-4" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div className="mb-3 flex items-center gap-1.5 text-[13px] font-bold">
        <Icon size={15} color={iconTone} />
        {title}
      </div>

      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i}>
            <div className="mb-1 flex items-center justify-between text-[12px]">
              <span className="font-semibold">{item.label}</span>
              <span style={{ color: neutral.sub }}>{item.pct}%</span>
            </div>
            <Bar pct={item.pct * barScale} tone={barTone} />
          </div>
        ))}
      </div>

      <p className="mt-2 text-[10.5px]" style={{ color: neutral.faint }}>{footnote}</p>
    </div>
  )
}
