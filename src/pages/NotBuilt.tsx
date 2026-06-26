import { Construction } from 'lucide-react'
import { neutral } from '@/tokens'
import { PageHeader } from '@/components'

interface NotBuiltProps {
  pageId: string
}

// Placeholder shown for the ~155 pages not yet assembled as reference pages.
export function NotBuilt({ pageId }: NotBuiltProps) {
  return (
    <>
      <PageHeader crumb={['App']} title={pageId} />
      <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: neutral.soft }}>
          <Construction size={24} color={neutral.faint} />
        </div>
        <div className="text-sm font-bold" style={{ color: neutral.ink }}>Reference page not built yet</div>
        <p className="max-w-xs text-[12px]" style={{ color: neutral.sub }}>
          Page <code className="rounded px-1" style={{ background: neutral.soft }}>{pageId}</code> exists in the nav
          but hasn't been assembled as a reference page. All components it would use are already built.
        </p>
      </div>
    </>
  )
}
