import type React from 'react'
import { useState } from 'react'
import { neutral, primary } from '@/tokens'

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  error?: boolean
}

export function Textarea({ error, onFocus, onBlur, ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false)

  const borderColor = error
    ? '#EF4444'
    : focused
      ? primary.accent
      : neutral.border

  return (
    <textarea
      {...props}
      onFocus={e => { setFocused(true); onFocus?.(e) }}
      onBlur={e => { setFocused(false); onBlur?.(e) }}
      className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none resize-y placeholder:text-[#AEB4C9]"
      style={{
        border: `1px solid ${borderColor}`,
        background: props.disabled ? neutral.soft : '#fff',
        color: neutral.ink,
        minHeight: 72,
        opacity: props.disabled ? 0.6 : 1,
        boxShadow: focused && !error ? `0 0 0 3px ${primary.accent}22` : undefined,
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
    />
  )
}
