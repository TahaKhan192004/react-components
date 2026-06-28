import { neutral } from '@/tokens'
import { Lbl } from './Lbl'

type OptItem = { value: string; label: string }

interface SelectProps {
  label?: string
  value: string
  onChange: (v: string) => void
  opts: OptItem[] | string[]
  placeholder?: string
  error?: boolean
  disabled?: boolean
}

/**
 * Full-width, labeled form select — matches Input height and border style.
 * Use for form fields. For compact inline filters use <Sel> instead.
 */
export function Select({ label, value, onChange, opts, placeholder, error, disabled }: SelectProps) {
  const items: OptItem[] = opts.map(o =>
    typeof o === 'string' ? { value: o, label: o } : o
  )

  return (
    <div>
      {label && <div className="mb-1"><Lbl>{label}</Lbl></div>}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none border-0"
        style={{
          border: `1px solid ${error ? '#EF4444' : neutral.border}`,
          background: disabled ? neutral.soft : '#fff',
          color: value ? neutral.ink : neutral.faint,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {items.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
