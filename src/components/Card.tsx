import type { ReactNode } from 'react'
import { neutral } from '@/tokens'

interface CardProps {
  children: ReactNode
  pad?: boolean
}

export function Card({ children, pad = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl ${pad ? 'p-4' : ''}`}
      style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}
    >
      {children}
    </div>
  )
}
