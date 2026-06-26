import { neutral } from '@/tokens'

export interface MiniRowItem {
  label: string
  v: string | number
  tone?: string
}

interface MiniRowProps {
  items: MiniRowItem[]
}

export function MiniRow({ items }: MiniRowProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((it, i) => (
        <div key={i} className="rounded-xl p-2.5" style={{ background: neutral.soft }}>
          <div className="text-[9.5px] font-semibold uppercase tracking-wide" style={{ color: neutral.sub }}>
            {it.label}
          </div>
          <div className="mt-0.5 text-[15px] font-bold leading-tight" style={{ color: it.tone ?? neutral.ink }}>
            {it.v}
          </div>
        </div>
      ))}
    </div>
  )
}
