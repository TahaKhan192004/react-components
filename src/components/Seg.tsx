import { primary, neutral } from '@/tokens'

interface SegProps {
  opts: string[]
  value: string
  onChange: (v: string) => void
}

// Segmented button control — pill group with one active segment.
// Source: Seg() in apip.html
export function Seg({ opts, value, onChange }: SegProps) {
  return (
    <div
      className="inline-flex rounded-lg p-0.5"
      style={{ border: `1px solid ${neutral.border}`, background: neutral.soft }}
    >
      {opts.map(o => {
        const on = o === value
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className="rounded-md px-3 py-1 text-[11px] font-semibold transition"
            style={{
              background: on ? primary.navy : 'transparent',
              color: on ? '#fff' : neutral.sub,
            }}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}
