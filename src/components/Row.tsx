import type { ReactNode } from 'react'

interface RowProps {
  children: ReactNode
  gap?: number       // Tailwind gap scale: 2, 3, 4 (default 4)
  wrap?: boolean     // flex-wrap (default true)
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between'
  className?: string
}

const alignMap = { start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch' }
const justifyMap = { start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between' }

export function Row({ children, gap = 4, wrap = true, align = 'start', justify = 'start', className = '' }: RowProps) {
  return (
    <div className={`flex gap-${gap} ${wrap ? 'flex-wrap' : ''} ${alignMap[align]} ${justifyMap[justify]} ${className}`}>
      {children}
    </div>
  )
}
