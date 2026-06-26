import type { ReactNode } from 'react'
import { neutral } from '@/tokens'

interface LblProps {
  children: ReactNode
}

export function Lbl({ children }: LblProps) {
  return (
    <div
      className="text-[10px] font-semibold uppercase tracking-wide"
      style={{ color: neutral.sub }}
    >
      {children}
    </div>
  )
}
