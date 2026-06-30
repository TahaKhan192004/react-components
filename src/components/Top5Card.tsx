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
    <div className="rounded-2xl overflow-hidden" style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}>
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b"
        style={{ borderColor: neutral.border, background: neutral.soft }}
      >
        <Icon size={15} color={iconTone} />
        <span className="text-[12.5px] font-bold" style={{ color: neutral.ink }}>{title}</span>
      </div>

      <div className="p-4">
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
        {footnote && <p className="mt-3 text-[10.5px]" style={{ color: neutral.faint }}>{footnote}</p>}
      </div>
    </div>
  )
}
