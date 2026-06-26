import { useState, useEffect } from 'react'
import { Globe, Lock, Users, ChevronDown, ArrowRight } from 'lucide-react'
import { primary, neutral } from '@/tokens'
import type { NavSection } from '@/types/nav'
import { SidebarItem } from './SidebarItem'
import { WorkspaceSwitcher } from './WorkspaceSwitcher'
import { Footer } from './Footer'

const GLABEL: Record<number, string> = {
  2: 'Operations',
  3: 'Corporate services',
  4: 'Commercial',
  5: 'System',
}

function navLocate(sections: NavSection[], page: string): { sec?: string; sub?: string } {
  for (const s of sections) {
    if (s.direct === page) return { sec: s.id }
    if (s.items?.some(i => i.id === page)) return { sec: s.id }
    if (s.subs) {
      for (const sub of s.subs) {
        for (const g of sub.groups) {
          if (g.items.some(i => i.id === page)) return { sec: s.id, sub: sub.id }
        }
      }
    }
  }
  return {}
}

interface SidebarProps {
  logoSrc: string
  roleLabel: string
  isAdmin: boolean
  branches: { id: string; name: string }[]
  activeBranch: string
  onBranchChange: (id: string) => void
  sections: NavSection[]
  page: string
  onPageChange: (page: string) => void
}

export function Sidebar({ logoSrc, roleLabel, isAdmin, branches, activeBranch, onBranchChange, sections, page, onPageChange }: SidebarProps) {
  const loc = navLocate(sections, page)
  const [openSec, setOpenSec] = useState<string | null>(loc.sec ?? null)
  const [openSub, setOpenSub] = useState<string | null>(loc.sub ?? null)

  useEffect(() => {
    const l = navLocate(sections, page)
    if (l.sec) setOpenSec(l.sec)
    if (l.sub) setOpenSub(l.sub)
  }, [page, sections])

  const rows: React.ReactNode[] = []
  let lastG: number | null = null

  for (const sec of sections) {
    const SIcon = sec.icon
    const openS = openSec === sec.id
    const g = sec.group ?? 1

    if (g !== lastG) {
      lastG = g
      if (GLABEL[g]) {
        rows.push(
          <div key={`grp${g}`} className="px-2.5 pb-1 pt-3.5 text-[9px] font-bold uppercase tracking-wider" style={{ color: neutral.faint }}>
            {GLABEL[g]}
          </div>
        )
      }
    }

    if (sec.direct) {
      const active = page === sec.direct
      rows.push(
        <button
          key={sec.id}
          onClick={() => onPageChange(sec.direct!)}
          className="mb-0.5 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[12.5px] font-semibold"
          style={{ background: active ? primary.indigoBg : 'transparent', color: active ? primary.indigo : neutral.ink }}
        >
          <SIcon size={16} color={active ? primary.indigo : neutral.sub} />
          {' '}
          <span className="flex-1">{sec.label}</span>
        </button>
      )
      continue
    }

    rows.push(
      <div key={sec.id} className="mb-0.5">
        <button
          onClick={() => setOpenSec(openS ? null : sec.id)}
          className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[12.5px] font-semibold"
          style={{ color: neutral.ink }}
        >
          <SIcon size={16} color={neutral.sub} />
          {' '}
          <span className="flex-1">{sec.label}</span>
          {' '}
          <ChevronDown size={14} color={neutral.faint} style={{ transform: openS ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform .15s' }} />
        </button>
        {openS && (
          <div className="ml-1 border-l pl-2" style={{ borderColor: neutral.border }}>
            {sec.items?.map(it => (
              <SidebarItem key={it.id} icon={it.icon} label={it.label} active={page === it.id} onClick={() => onPageChange(it.id)} />
            ))}
            {sec.subs?.map(sub => {
              const openB = openSub === sub.id
              return (
                <div key={sub.id} className="mb-0.5">
                  <button
                    onClick={() => setOpenSub(openB ? null : sub.id)}
                    className="flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-[11.5px] font-semibold"
                    style={{ color: neutral.sub }}
                  >
                    <span className="flex-1">{sub.label}</span>
                    <ChevronDown size={12} color={neutral.faint} style={{ transform: openB ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform .15s' }} />
                  </button>
                  {openB && (
                    <div className="ml-1 border-l pl-2" style={{ borderColor: neutral.border }}>
                      {sub.groups.map((gp, gi) => (
                        <div key={gi}>
                          {gp.label && (
                            <div className="px-2 pb-0.5 pt-1.5 text-[9px] font-bold uppercase tracking-wide" style={{ color: neutral.faint }}>
                              {gp.label}
                            </div>
                          )}
                          {gp.items.map(it => (
                            <SidebarItem key={it.id} icon={it.icon} label={it.label} active={page === it.id} onClick={() => onPageChange(it.id)} />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside
      className="sticky top-0 flex h-screen w-[224px] shrink-0 flex-col self-start border-r"
      style={{ background: neutral.card, borderColor: neutral.border }}
    >
      <div className="flex items-center px-5 py-4">
        <img src={logoSrc} alt="Logo" style={{ height: 46, width: 'auto' }} />
      </div>
      <div
        className="mx-3 mb-1 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-semibold"
        style={{ background: primary.indigoBg, color: primary.indigo }}
      >
        {isAdmin ? <Lock size={11} /> : <Users size={11} />}
        {' '}
        {roleLabel} workspace
      </div>
      <WorkspaceSwitcher branches={branches} activeBranch={activeBranch} onBranchChange={onBranchChange} />
      <nav className="flex-1 overflow-auto px-2.5 pb-4">
        {rows}
      </nav>
      <a
        href="website.html"
        target="_blank"
        rel="noopener"
        className="mx-2.5 mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] font-semibold"
        style={{ background: primary.indigoBg, color: primary.indigo }}
      >
        <Globe size={15} />
        {' '}
        <span className="flex-1">Public website</span>
        {' '}
        <ArrowRight size={13} />
      </a>
      <Footer />
    </aside>
  )
}
