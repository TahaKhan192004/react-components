import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type BannerVariant = 'info' | 'success' | 'warning' | 'danger'

const variants: Record<BannerVariant, { bg: string; titleColor: string; bodyColor: string; border?: string }> = {
  info:    { bg: '#EEF0FE', titleColor: '#3730A3', bodyColor: '#4338CA' },
  success: { bg: '#DCFCE7', titleColor: '#166534', bodyColor: '#166534', border: '#86EFAC' },
  warning: { bg: '#FEF3C7', titleColor: '#9A3412', bodyColor: '#9A3412', border: '#FCD34D' },
  danger:  { bg: '#FEE2E2', titleColor: '#B91C1C', bodyColor: '#B91C1C', border: '#FCA5A5' },
}

interface BannerProps {
  variant?: BannerVariant
  icon?: LucideIcon
  title: string
  body?: ReactNode
  action?: ReactNode
  moduleId?: string
}

// Info/status banner strip — matches COO dashboard banner + PGTS RTO banner in apip.html
export function Banner({ variant = 'info', icon: Icon, title, body, action, moduleId }: BannerProps) {
  const v = variants[variant]
  return (
    <div
      className="mb-3 rounded-2xl p-3.5"
      style={{ background: v.bg, ...(v.border ? { border: `1px solid ${v.border}` } : {}) }}
    >
      <div className="flex items-center gap-1.5 text-[12px] font-bold" style={{ color: v.titleColor }}>
        {Icon && <Icon size={14} />}
        {title}
        {moduleId && (
          <span
            className="ml-1 rounded px-1.5 py-0.5 font-mono text-[10px]"
            style={{ background: '#fff', color: '#6366F1' }}
          >
            {moduleId}
          </span>
        )}
        {action && <span className="ml-auto">{action}</span>}
      </div>
      {body && (
        <p className="mt-1 text-[11px]" style={{ color: v.bodyColor }}>
          {body}
        </p>
      )}
    </div>
  )
}
