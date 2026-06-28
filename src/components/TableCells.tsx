import type { ReactNode } from 'react'
import { Badge } from './Badge'
import { Avatar } from './Avatar'
import { Toggle } from './Toggle'

// ---------------------------------------------------------------------------
// Pre-built cell-renderer factories for use as TableCol<T>.render functions.
// Each factory returns a (row: T) => ReactNode ready to drop into a column def.
// ---------------------------------------------------------------------------

/**
 * Renders a Badge by looking up the cell value in a color map.
 * Unrecognised values fall back to a neutral style.
 *
 * @example
 * { key: 'status', label: 'Status', render: statusCell('status', {
 *   Active:   { color: '#15803D', bg: '#DCFCE7' },
 *   Inactive: { color: '#B91C1C', bg: '#FEE2E2' },
 * })}
 */
export function statusCell<T>(
  key: keyof T,
  map: Record<string, { color: string; bg: string }>
): (row: T) => ReactNode {
  return (row: T) => {
    const val = String((row as Record<string, unknown>)[key as string] ?? '')
    const style = map[val] ?? { color: '#8A93AD', bg: '#F6F7FB' }
    return <Badge label={val} color={style.color} bg={style.bg} />
  }
}

/**
 * Renders an Avatar (initials) from the named field.
 *
 * @example
 * { key: 'assignee', label: 'Assignee', width: '80px',
 *   render: avatarCell('assignee') }
 */
export function avatarCell<T>(
  key: keyof T,
  size: 'sm' | 'md' | 'lg' = 'sm'
): (row: T) => ReactNode {
  return (row: T) => {
    const name = String((row as Record<string, unknown>)[key as string] ?? '?')
    return <Avatar name={name} size={size} />
  }
}

/**
 * Renders a Toggle that reads a boolean field and calls onChange on flip.
 * Wraps in a div with stopPropagation so row-click doesn't also fire.
 *
 * @example
 * { key: 'active', label: 'Active', width: '80px',
 *   render: toggleCell('active', (row, next) => updateRow(row, next)) }
 */
export function toggleCell<T>(
  key: keyof T,
  onChange: (row: T, next: boolean) => void
): (row: T) => ReactNode {
  return (row: T) => {
    const on = Boolean((row as Record<string, unknown>)[key as string])
    return (
      <div onClick={e => e.stopPropagation()}>
        <Toggle on={on} onChange={next => onChange(row, next)} />
      </div>
    )
  }
}

/**
 * Renders a Badge where the colour is computed per-value via a function.
 * Use when your colour logic is dynamic (e.g. thresholds, not enum mapping).
 *
 * @example
 * { key: 'score', label: 'Score',
 *   render: badgeCell('score', val =>
 *     Number(val) >= 80 ? { color: '#15803D', bg: '#DCFCE7' }
 *                       : { color: '#B91C1C', bg: '#FEE2E2' }) }
 */
export function badgeCell<T>(
  key: keyof T,
  colorFn: (val: string) => { color: string; bg: string }
): (row: T) => ReactNode {
  return (row: T) => {
    const val = String((row as Record<string, unknown>)[key as string] ?? '')
    const style = colorFn(val)
    return <Badge label={val} color={style.color} bg={style.bg} />
  }
}
