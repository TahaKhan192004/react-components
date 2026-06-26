import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  id: string
  label: string
  icon: LucideIcon
}

export interface NavGroup {
  label?: string
  items: NavItem[]
}

export interface NavSub {
  id: string
  label: string
  groups: NavGroup[]
}

export interface NavSection {
  id: string
  label: string
  icon: LucideIcon
  group?: number
  direct?: string
  items?: NavItem[]
  subs?: NavSub[]
}
