import { neutral } from '@/tokens'

interface KVProps {
  k: string
  v: string
}

export function KV({ k, v }: KVProps) {
  return (
    <div>
      <div
        className="text-[10px] uppercase tracking-wide"
        style={{ color: neutral.faint }}
      >
        {k}
      </div>
      <div className="font-semibold">{v}</div>
    </div>
  )
}
