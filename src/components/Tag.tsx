import { neutral } from '@/tokens'

interface TagProps {
  label: string
  color?: string
}

// Soft auto-tinted chip: color at 10% opacity bg, full color text.
// Source: Chip({ text, color }) in apip.html
export function Tag({ label, color = neutral.sub }: TagProps) {
  return (
    <span
      className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
      style={{ background: color + '1A', color }}
    >
      {label}
    </span>
  )
}
