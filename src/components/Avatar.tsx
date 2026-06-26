import { primary } from '@/tokens'

type AvatarSize = 'sm' | 'md' | 'lg'

interface AvatarProps {
  name: string
  role?: 'admin' | string
  size?: AvatarSize
  bg?: string
}

const sizes: Record<AvatarSize, string> = {
  sm: 'h-6 w-6 text-[10px]',
  md: 'h-8 w-8 text-xs',
  lg: 'h-10 w-10 text-sm',
}

// Initials avatar — admin uses navy, others use indigo (matches Topbar + user list)
export function Avatar({ name, role, size = 'md', bg }: AvatarProps) {
  const resolved = bg ?? (role === 'admin' ? primary.navy : primary.indigo)
  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold text-white ${sizes[size]}`}
      style={{ background: resolved }}
    >
      {name[0]}
    </div>
  )
}
