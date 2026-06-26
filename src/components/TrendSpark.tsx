interface TrendSparkProps {
  data: number[]
  color: string
  upGood?: boolean  // true = up is green (e.g. revenue); false (default) = up is red (e.g. risk)
}

// Inline SVG polyline sparkline with a directional arrow.
// Source: TrendSpark() in apip.html
export function TrendSpark({ data, color, upGood = false }: TrendSparkProps) {
  const w = 84, h = 26
  const max = Math.max(...data)
  const min = Math.min(...data)
  const pts = data
    .map((v, i) =>
      `${(i / (data.length - 1)) * w},${h - 2 - ((v - min) / (max - min || 1)) * (h - 4)}`
    )
    .join(' ')

  const up = data[data.length - 1] >= data[0]
  const arrowColor = up
    ? upGood ? '#16A34A' : '#B91C1C'
    : upGood ? '#B91C1C' : '#16A34A'

  return (
    <div className="flex items-center gap-1.5">
      <svg width={w} height={h}>
        <polyline
          points={pts}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[10px] font-bold" style={{ color: arrowColor }}>
        {up ? '▲' : '▼'}
      </span>
    </div>
  )
}
