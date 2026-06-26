import { neutral } from '@/tokens'

interface SelProps {
  value: string
  onChange: (v: string) => void
  opts: string[]
}

// Compact inline select — used for status filters, direction picks, etc.
// Source: Sel() in apip.html
export function Sel({ value, onChange, opts }: SelProps) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="rounded-lg px-2 py-1 text-[11px] font-semibold outline-none border-0"
      style={{ background: neutral.soft, border: `1px solid ${neutral.border}`, color: neutral.ink }}
    >
      {opts.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  )
}
