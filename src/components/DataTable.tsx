import { useState } from 'react'
import type { ReactNode } from 'react'
import { Search } from 'lucide-react'
import { neutral } from '@/tokens'

export interface TableCol<T = unknown> {
  key: string
  label: string
  // CSS grid track — e.g. "100px", "minmax(150px,1.7fr)", "1fr" (default)
  width?: string
  align?: 'left' | 'right' | 'center'
  render?: (row: T) => ReactNode
  // Set false to exclude this column from built-in search filtering
  searchable?: boolean
}

interface DataTableProps<T = unknown> {
  cols: TableCol<T>[]
  rows: T[]
  keyFn: (row: T) => string
  onRowClick?: (row: T) => void
  empty?: string
  minWidth?: number
  footer?: string
  // Show a search bar above the table that filters rows client-side
  searchable?: boolean
  searchPlaceholder?: string
}

export function DataTable<T>({
  cols,
  rows,
  keyFn,
  onRowClick,
  empty = 'No rows to show.',
  minWidth = 600,
  footer,
  searchable = false,
  searchPlaceholder = 'Search…',
}: DataTableProps<T>) {
  const [query, setQuery] = useState('')

  const filtered =
    searchable && query.trim()
      ? rows.filter(row =>
          cols.some(col => {
            if (col.searchable === false) return false
            const val = (row as Record<string, unknown>)[col.key]
            return String(val ?? '').toLowerCase().includes(query.toLowerCase())
          })
        )
      : rows

  const tpl = cols.map(c => c.width ?? '1fr').join(' ')

  const ca = (col: TableCol<T>) =>
    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : ''

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}
    >
      {/* Built-in search bar */}
      {searchable && (
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ borderBottom: `1px solid ${neutral.border}`, background: neutral.soft }}
        >
          <Search size={13} color={neutral.faint} style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="flex-1 bg-transparent text-[12px] outline-none border-0"
            style={{ color: neutral.ink }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[10px] font-semibold transition hover:opacity-70"
              style={{ color: neutral.sub }}
            >
              Clear
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <div style={{ minWidth }}>

          {/* Header */}
          <div
            className="grid gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: neutral.faint, background: neutral.soft, gridTemplateColumns: tpl }}
          >
            {cols.map(col => (
              <div key={col.key} className={ca(col)}>{col.label}</div>
            ))}
          </div>

          {/* Rows */}
          {filtered.length === 0 ? (
            <div className="py-6 text-center text-[12px]" style={{ color: neutral.faint }}>
              {query.trim() ? `No results for "${query}"` : empty}
            </div>
          ) : filtered.map(row => {
            const cells = cols.map(col => (
              <div key={col.key} className={`min-w-0 ${ca(col)}`}>
                {col.render
                  ? col.render(row)
                  : String((row as Record<string, unknown>)[col.key] ?? '—')}
              </div>
            ))
            const s = { borderTop: `1px solid ${neutral.border}`, gridTemplateColumns: tpl }
            const base = 'grid items-center gap-2 px-4 py-2.5 text-[12px]'

            return onRowClick ? (
              <button
                key={keyFn(row)}
                onClick={() => onRowClick(row)}
                className={`${base} w-full text-left transition hover:bg-[#F6F7FB]`}
                style={s}
              >
                {cells}
              </button>
            ) : (
              <div key={keyFn(row)} className={base} style={s}>
                {cells}
              </div>
            )
          })}

        </div>
      </div>

      {footer && (
        <div
          className="px-4 py-2.5 text-[10.5px]"
          style={{ color: neutral.faint, borderTop: `1px solid ${neutral.border}` }}
        >
          {footer}
        </div>
      )}
    </div>
  )
}
