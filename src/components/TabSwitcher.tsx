import { primary, neutral } from '@/tokens'

export interface TabItem {
  key: string
  label: string
}

interface TabSwitcherProps {
  tabs: TabItem[] | string[]
  active: string
  onChange: (key: string) => void
}

// Pill-style filter/tab row — matches filter buttons across all list pages in apip.html
export function TabSwitcher({ tabs, active, onChange }: TabSwitcherProps) {
  const items: TabItem[] = tabs.map(t =>
    typeof t === 'string' ? { key: t, label: t } : t
  )

  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {items.map(t => {
        const isActive = t.key === active
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className="rounded-full px-3 py-1 text-[11px] font-semibold transition"
            style={{
              background: isActive ? primary.navy : neutral.card,
              color: isActive ? '#fff' : neutral.sub,
              border: `1px solid ${neutral.border}`,
            }}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}
