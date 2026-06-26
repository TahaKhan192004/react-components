import type { ReactNode } from 'react'

interface PageShellProps {
  sidebar: ReactNode
  topbar: ReactNode
  children: ReactNode
}

export function PageShell({ sidebar, topbar, children }: PageShellProps) {
  return (
    <div className="flex min-h-screen w-full">
      {sidebar}
      <div className="flex min-w-0 flex-1 flex-col">
        {topbar}
        <main className="flex-1 overflow-auto px-6 py-5">
          {children}
        </main>
      </div>
    </div>
  )
}
