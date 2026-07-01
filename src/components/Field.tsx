import type { ReactNode } from 'react'
import { neutral } from '@/tokens'
import { Input } from './Input'

interface FieldProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
  children?: ReactNode
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
        <Input
          type={type}
          value={value ?? ''}
          onChange={e => onChange?.(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          error={!!error}
        />
      )}

      {error && <p className="text-[10.5px]" style={{ color: '#B91C1C' }}>{error}</p>}
      {hint && !error && <p className="text-[10.5px]" style={{ color: neutral.faint }}>{hint}</p>}
    </div>
  )
}
