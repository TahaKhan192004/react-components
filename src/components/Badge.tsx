interface BadgeProps {
  label: string
  color: string
  bg: string
}

export function Badge({ label, color, bg }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{ background: bg, color }}
    >
      {label}
    </span>
  )
}
