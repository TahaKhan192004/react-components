import type { LucideIcon } from 'lucide-react'
import { primary, neutral } from '@/tokens'

export interface StepperStage {
  key: string
  label: string
  icon: LucideIcon
}

interface StepperProps {
  stages: StepperStage[]
  current: number   // 0-based index of current step (all steps ≤ current are "done")
}

// Horizontal step progress bar with icon circles and connector lines.
// Source: Stepper() in AirTrackTracePage in apip.html
export function Stepper({ stages, current }: StepperProps) {
  return (
    <div className="flex items-start overflow-x-auto pb-1">
      {stages.map((st, i) => {
        const done = i <= current
        const Icon = st.icon
        return (
          <div key={st.key} className="flex items-start">
            <div className="flex flex-col items-center" style={{ minWidth: 62 }}>
              <span
                className="grid h-7 w-7 place-items-center rounded-full"
                style={{
                  background: done ? primary.accent : '#fff',
                  color: done ? '#fff' : neutral.faint,
                  border: `1px solid ${done ? primary.accent : neutral.border}`,
                }}
              >
                <Icon size={13} />
              </span>
              <span
                className="mt-1 text-center text-[9px] font-semibold leading-tight"
                style={{ color: done ? neutral.ink : neutral.faint, maxWidth: 62 }}
              >
                {st.label}
              </span>
            </div>

            {i < stages.length - 1 && (
              <div
                className="mx-1 mt-3.5 h-0.5 flex-1"
                style={{ minWidth: 14, background: i < current ? primary.accent : neutral.border }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
