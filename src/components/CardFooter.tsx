import type { ReactNode } from 'react'
import { neutral } from '@/tokens'

interface CardFooterProps {
  children: ReactNode
  align?: 'left' | 'right' | 'between'
}

export function CardFooter({ children, align = 'right' }: CardFooterProps) {
  const justify =
    align === 'left'    ? 'justify-start' :
    align === 'between' ? 'justify-between' :
                          'justify-end'

  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 border-t ${justify}`}
      style={{ borderColor: neutral.border }}
    >
      {children}
    </div>
  )
}
