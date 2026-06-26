import { neutral } from '@/tokens'

export interface DistBarRow {
  label: string
  pct: number
  color: string
}

interface DistBarsProps {
  title?: string
  rows: DistBarRow[]
}

// Stacked labelled distribution bar chart.
// Source: DistBars() in apip.html
export function DistBars({ title, rows }: DistBarsProps) {
  return (
    <div>
      {title && (
        <div className="mb-1.5 text-[11px] font-semibold" style={{ color: neutral.sub }}>
          {title}
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        {rows.map(row => (
          <div key={row.label}>
            <div className="flex justify-between text-[11px]">
              <span>{row.label}</span>
              <span className="font-semibold">{row.pct}%</span>
            </div>
            <div className="mt-0.5 h-1.5 rounded-full" style={{ background: neutral.border }}>
              <div
                className="h-1.5 rounded-full"
                style={{ width: `${Math.min(100, row.pct)}%`, background: row.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
