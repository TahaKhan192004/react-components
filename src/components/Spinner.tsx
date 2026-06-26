import { primary, neutral } from '@/tokens'

interface SpinnerProps {
  size?: number    // px, default 14
  light?: boolean  // white border for dark backgrounds
}

// CSS animation spinner — matches cg-spin in apip.html
export function Spinner({ size = 14, light = false }: SpinnerProps) {
  return (
    <span
      className="inline-block animate-spin rounded-full"
      style={{
        width: size,
        height: size,
        border: `2px solid ${light ? 'rgba(255,255,255,0.3)' : neutral.border}`,
        borderTopColor: light ? '#fff' : primary.accent,
      }}
    />
  )
}
