import { neutral, primary } from '@/tokens'

interface CompareBarProps {
  label: string
  declared: number | null | undefined
  measured: number | null | undefined
  unit: string
}

// Dual-bar comparison: declared (faint) vs measured (accent/red).
// Flags >10% deviation in red. Source: CompareBar() in apip.html
export function CompareBar({ label, declared, measured, unit }: CompareBarProps) {
  if (declared == null || measured == null) {
    return (
      <div className="flex items-center justify-between text-[12px]">
        <span style={{ color: neutral.sub }}>{label}</span>
        <span style={{ color: '#C2410C' }}>
          {measured == null ? 'not captured' : `${measured}${unit}`}
        </span>
      </div>
    )
  }

  const delta = (measured - declared) / declared
  const over = Math.abs(delta) > 0.1
  const max = Math.max(declared, measured) * 1.15

  return (
    <div className="text-[12px]">
      <div className="flex items-center justify-between">
        <span style={{ color: neutral.sub }}>{label}</span>
        <span className="font-semibold" style={{ color: over ? '#B91C1C' : neutral.ink }}>
          {measured}{unit}{' '}
          <span style={{ color: neutral.faint }}>vs {declared}{unit}</span>{' '}
          <span style={{ color: over ? '#B91C1C' : '#16A34A' }}>
            ({delta >= 0 ? '+' : ''}{(delta * 100).toFixed(0)}%)
          </span>
        </span>
      </div>
      <div className="mt-1 flex gap-1">
        <div className="h-1.5 flex-1 rounded" style={{ background: neutral.border }}>
          <div
            className="h-1.5 rounded"
            style={{ width: `${(declared / max) * 100}%`, background: neutral.faint }}
          />
        </div>
        <div className="h-1.5 flex-1 rounded" style={{ background: neutral.border }}>
          <div
            className="h-1.5 rounded"
            style={{ width: `${(measured / max) * 100}%`, background: over ? '#EF4444' : primary.accent }}
          />
        </div>
      </div>
    </div>
  )
}
