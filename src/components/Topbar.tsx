import { useState } from 'react'
import { Search, Globe, Bell, ChevronDown, Check } from 'lucide-react'
import { primary, neutral } from '@/tokens'

export interface TopbarUser {
  name: string
  roleLabel: string
  role: string
  active?: boolean
}

interface TopbarProps {
  userId: string
  users: Record<string, TopbarUser>
  onUserChange: (id: string) => void
}

export function Topbar({ userId, users, onUserChange }: TopbarProps) {
  const [open, setOpen] = useState(false)
  const u = users[userId]
  const list = Object.entries(users).filter(([, user]) => user.active !== false)

  return (
    <header
      className="flex h-[58px] shrink-0 items-center gap-4 border-b px-6"
      style={{ background: neutral.card, borderColor: neutral.border }}
    >
      <div
        className="flex max-w-md flex-1 items-center gap-2 rounded-lg px-3 py-2"
        style={{ background: neutral.soft }}
      >
        <Search size={15} color={neutral.sub} />
        <input placeholder="Search here..." className="w-full border-0 bg-transparent text-sm outline-none" />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium"
          style={{ color: neutral.sub }}
        >
          <Globe size={14} />
          {' '}Eng (US){' '}
          <ChevronDown size={13} />
        </button>

        <button className="relative">
          <Bell size={17} color={neutral.sub} />
          <span
            className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full"
            style={{ background: primary.indigo }}
          />
        </button>

        <div className="relative border-l pl-3" style={{ borderColor: neutral.border }}>
          <button onClick={() => setOpen(o => !o)} className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: primary.indigo }}
            >
              {u.name[0]}
            </div>
            <div className="text-left leading-tight">
              <div className="text-[12px] font-semibold">{u.name}</div>
              <div className="text-[10px]" style={{ color: neutral.sub }}>{u.roleLabel}</div>
            </div>
            <ChevronDown size={14} color={neutral.sub} />
          </button>

          {open && (
            <div
              className="absolute right-0 z-20 mt-2 w-56 rounded-xl p-1.5 shadow-lg"
              style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}
            >
              <div className="px-2 py-1 text-[9px] font-bold uppercase tracking-wide" style={{ color: neutral.faint }}>
                Switch login (demo)
              </div>
              {list.map(([id, user]) => (
                <button
                  key={id}
                  onClick={() => { onUserChange(id); setOpen(false) }}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[12px]"
                  style={{ background: id === userId ? primary.indigoBg : 'transparent' }}
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: user.role === 'admin' ? primary.navy : primary.indigo }}
                  >
                    {user.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold" style={{ color: id === userId ? primary.indigo : neutral.ink }}>
                      {user.name}
                    </div>
                    <div className="text-[10px]" style={{ color: neutral.sub }}>{user.roleLabel}</div>
                  </div>
                  {id === userId && <Check size={13} color={primary.indigo} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
