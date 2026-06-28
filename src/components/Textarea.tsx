import type React from 'react'
import { neutral } from '@/tokens'

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  error?: boolean
}

export function Textarea({ error, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none resize-y border-0"
      style={{
        border: `1px solid ${error ? '#EF4444' : neutral.border}`,
        background: '#fff',
        color: neutral.ink,
        minHeight: 72,
      }}
    />
  )
}
