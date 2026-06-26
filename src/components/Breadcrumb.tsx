import { ChevronRight } from 'lucide-react'
import { neutral } from '@/tokens'

interface BreadcrumbProps {
  crumb: string[]
}

export function Breadcrumb({ crumb }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-1 text-[11px]" style={{ color: neutral.sub }}>
      {crumb.map((c, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={11} />}
          {c}
        </span>
      ))}
    </div>
  )
}
