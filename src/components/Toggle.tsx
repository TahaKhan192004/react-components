import { neutral } from '@/tokens'

interface ToggleProps {
  on: boolean
  onChange: (next: boolean) => void
  label?: string
  sub?: string
}

// Simple pill toggle — `h-5 w-9 rounded-full` track, `h-4 w-4` knob.
// Source: tog() helper in SettingsPage + role-access matrix in apip.html
export function Toggle({ on, onChange, label, sub }: ToggleProps) {
  const track = (
    <span
      className="inline-flex h-5 w-9 shrink-0 items-center rounded-full px-0.5 transition"
      style={{
        background: on ? '#22C55E' : neutral.border,
        justifyContent: on ? 'flex-end' : 'flex-start',
      }}
    >
      <span className="h-4 w-4 rounded-full bg-white" />
    </span>
  )

  if (!label) {
    return (
      <button onClick={() => onChange(!on)} type="button">
        {track}
      </button>
    )
  }

  return (
    <button
      onClick={() => onChange(!on)}
      type="button"
      className="flex w-full items-center justify-between rounded-xl px-3 py-2.5"
      style={{ background: neutral.soft }}
    >
      <div className="text-left">
        <div className="text-[12px] font-semibold">{label}</div>
        {sub && <div className="text-[10px]" style={{ color: neutral.sub }}>{sub}</div>}
      </div>
      {track}
    </button>
  )
}
