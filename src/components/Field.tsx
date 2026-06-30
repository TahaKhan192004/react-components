import type React from 'react'
import { neutral } from '@/tokens'

interface FieldProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
  children?: React.ReactNode
  // shorthand: pass these to render a plain input without a child
  value?: string
  onChange?: (v: string) => void
  placeholder?: string
  type?: string
  disabled?: boolean
}

export function Field({ label, error, hint, required, children, value, onChange, placeholder, type = 'text', disabled }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-bold uppercase tracking-wide" style={{ color: neutral.sub }}>
        {label}
        {required && <span className="ml-0.5" style={{ color: '#B91C1C' }}>*</span>}
      </label>

      {children ?? (
        <input
          type={type}
          value={value ?? ''}
          onChange={e => onChange?.(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none"
          style={{
            border: `1px solid ${error ? '#EF4444' : neutral.border}`,
            background: disabled ? neutral.soft : '#fff',
            color: neutral.ink,
            opacity: disabled ? 0.6 : 1,
          }}
        />
      )}

      {error && <p className="text-[10.5px]" style={{ color: '#B91C1C' }}>{error}</p>}
      {hint && !error && <p className="text-[10.5px]" style={{ color: neutral.faint }}>{hint}</p>}
    </div>
  )
}
