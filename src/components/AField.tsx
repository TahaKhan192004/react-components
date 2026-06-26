import { primary, neutral } from '@/tokens'

export interface FieldMeta {
  conf?: number   // AI confidence 0-100
  src?: string    // AI source tooltip
  edited?: boolean
}

interface AFieldProps {
  label: string
  value: string | number | null | undefined
  onChange: (v: string) => void
  opts?: string[]        // renders <select> when provided
  placeholder?: string
  suffix?: string
  meta?: FieldMeta
}

// Labeled form field with optional AI confidence badge.
// Renders <select> when opts provided, <input> otherwise.
// Source: AField() in apip.html
export function AField({ label, value, onChange, opts, placeholder, suffix, meta }: AFieldProps) {
  return (
    <div className="mb-2.5">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span
          className="text-[10px] font-semibold uppercase tracking-wide"
          style={{ color: neutral.sub }}
        >
          {label}
        </span>
        {meta && (
          meta.edited
            ? <span className="text-[9px]" style={{ color: neutral.faint }}>edited</span>
            : meta.conf != null && (
              <span
                className="rounded px-1 py-0.5 text-[9px] font-bold"
                style={{ background: primary.indigoBg, color: primary.indigo }}
                title={meta.src ?? ''}
              >
                AI {meta.conf}%
              </span>
            )
        )}
      </div>

      {opts ? (
        <select
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          className="w-full rounded-lg border border-0 px-2.5 py-1.5 text-[12px] outline-none"
          style={{ borderColor: neutral.border, background: '#fff', border: `1px solid ${neutral.border}` }}
        >
          <option value="">{placeholder ?? '—'}</option>
          {opts.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <div className="flex items-center gap-1">
          <input
            value={value ?? ''}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder ?? ''}
            className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none"
            style={{ border: `1px solid ${neutral.border}`, background: '#fff' }}
          />
          {suffix && (
            <span className="shrink-0 text-[10px]" style={{ color: neutral.faint }}>
              {suffix}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
