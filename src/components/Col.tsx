import type { ReactNode } from 'react'

interface ColProps {
  children: ReactNode
  // flex-basis as fraction of 12 cols (1–12). Omit for flex-1.
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  className?: string
}

const spanMap: Record<number, string> = {
  1: 'w-1/12', 2: 'w-2/12', 3: 'w-3/12', 4: 'w-4/12',
  5: 'w-5/12', 6: 'w-6/12', 7: 'w-7/12', 8: 'w-8/12',
  9: 'w-9/12', 10: 'w-10/12', 11: 'w-11/12', 12: 'w-full',
}

export function Col({ children, span, className = '' }: ColProps) {
  const width = span ? spanMap[span] : 'flex-1'
  return (
    <div className={`min-w-0 ${width} ${className}`}>
      {children}
    </div>
  )
}
