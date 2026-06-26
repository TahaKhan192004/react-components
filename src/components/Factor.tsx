import { neutral } from '@/tokens'

interface FactorProps {
  label: string
  v: number   // 0-100, percentage
}

// Small labelled risk/progress bar. Green <15%, orange <35%, red ≥35%.
// Source: Factor() in apip.html
export function Factor({ label, v }: FactorProps) {
  const col = v < 15 ? '#16A34A' : v < 35 ? '#EA580C' : '#B91C1C'

  return (
    <div className="min-w-[88px] flex-1">
      <div className="flex items-center justify-between text-[10px]">
        <span style={{ color: neutral.sub }}>{label}</span>
        <span className="font-semibold" style={{ color: col }}>{v}%</span>
      </div>
      <div className="mt-0.5 h-1.5 rounded" style={{ background: neutral.border }}>
        <div
          className="h-1.5 rounded"
          style={{ width: `${Math.min(100, v)}%`, background: col }}
        />
      </div>
    </div>
  )
}
