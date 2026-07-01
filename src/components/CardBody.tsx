import type { ReactNode } from 'react'

interface CardBodyProps {
  children: ReactNode
  pad?: boolean
}

export function CardBody({ children, pad = true }: CardBodyProps) {
  return (
    <div className={pad ? 'p-4' : ''}>
      {children}
    </div>
  )
}
