import { neutral } from '@/tokens'

interface DonutProps {
  value: number   // 0-100
  color: string
  size?: number   // px, default 52
}

// SVG donut ring with centred % label.
// Source: Donut() in apip.html
export function Donut({ value, color, size = 52 }: DonutProps) {
  const r = size / 2 - 6
  const c = 2 * Math.PI * r
  const off = c * (1 - value / 100)

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={neutral.border} strokeWidth="6"
      />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={c} strokeDashoffset={off}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%" y="52%"
        dominantBaseline="middle" textAnchor="middle"
        fontSize="13" fontWeight="700" fill={neutral.ink}
      >
        {value}%
      </text>
    </svg>
  )
}
