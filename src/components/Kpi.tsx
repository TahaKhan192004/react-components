import { neutral } from '@/tokens'

interface KpiProps {
  label: string
  v: string | number
  sub?: string
  tone?: string
}

export function Kpi({ label, v, sub, tone = neutral.ink }: KpiProps) {
  return (
    <div
      className="rounded-2xl bg-white p-3.5"
      style={{ border: `1px solid ${neutral.border}` }}
    >
      <div
        className="text-[10px] font-semibold uppercase tracking-wide"
        style={{ color: neutral.sub }}
      >
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold" style={{ color: tone }}>
        {v}
        {sub && (
          <span className="text-[11px]" style={{ color: neutral.sub }}>
            {' '}{sub}
          </span>
        )}
      </div>
    </div>
  )
}
