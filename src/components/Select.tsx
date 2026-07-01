import { useState } from 'react'
import { neutral, primary } from '@/tokens'
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

export function Select({ label, value, onChange, opts, placeholder, error, disabled }: SelectProps) {
  const [focused, setFocused] = useState(false)

  const items: OptItem[] = opts.map(o =>
    typeof o === 'string' ? { value: o, label: o } : o
  )

  const borderColor = error
    ? '#EF4444'
    : focused
      ? primary.accent
      : neutral.border

  return (
    <div>
      {label && <div className="mb-1"><Lbl>{label}</Lbl></div>}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none"
        style={{
          border: `1px solid ${borderColor}`,
          background: disabled ? neutral.soft : '#fff',
          color: value ? neutral.ink : neutral.faint,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          boxShadow: focused && !error ? `0 0 0 3px ${primary.accent}22` : undefined,
          transition: 'border-color 0.15s, box-shadow 0.15s',
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
