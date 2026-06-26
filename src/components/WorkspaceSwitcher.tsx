import { Globe } from 'lucide-react'
import { neutral } from '@/tokens'

interface Branch {
  id: string
  name: string
}

interface WorkspaceSwitcherProps {
  branches: Branch[]
  activeBranch: string
  onBranchChange: (id: string) => void
}

export function WorkspaceSwitcher({ branches, activeBranch, onBranchChange }: WorkspaceSwitcherProps) {
  return (
    <div
      className="mx-3 mb-2 flex items-center gap-1.5 rounded-lg px-2 py-1"
      style={{ border: `1px solid ${neutral.border}` }}
    >
      <Globe size={12} color={neutral.sub} />
      <select
        value={activeBranch}
        onChange={e => onBranchChange(e.target.value)}
        className="w-full border-0 bg-transparent text-[11px] font-semibold outline-none"
        style={{ color: neutral.ink }}
      >
        {branches.map(b => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>
    </div>
  )
}
