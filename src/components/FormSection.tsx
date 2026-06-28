import type { ReactNode } from 'react'
import { neutral } from '@/tokens'

interface FormSectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function FormSection({ title, description, children, className = '' }: FormSectionProps) {
  return (
    <div className={`mb-5 ${className}`}>
      <div
        className="mb-1 text-[10px] font-bold uppercase tracking-widest"
        style={{ color: neutral.sub }}
      >
        {title}
      </div>
      {description && (
        <p className="mb-3 text-[11px] leading-relaxed" style={{ color: neutral.faint }}>
          {description}
        </p>
      )}
      <div>{children}</div>
    </div>
  )
}
