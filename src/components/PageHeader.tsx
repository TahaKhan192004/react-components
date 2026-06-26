import type { ReactNode } from 'react'
import { Breadcrumb } from './Breadcrumb'

interface PageHeaderProps {
  crumb: string[]
  title: string
  action?: ReactNode
}

export function PageHeader({ crumb, title, action }: PageHeaderProps) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <Breadcrumb crumb={crumb} />
        <h1 className="mt-0.5 text-xl font-bold">{title}</h1>
      </div>
      {action}
    </div>
  )
}
