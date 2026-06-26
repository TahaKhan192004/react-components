import { neutral } from '@/tokens'

interface FooterProps {
  company?: string
  tagline?: string
}

export function Footer({ company = '© Customs Gateways LLC-FZ', tagline = 'White-label platform' }: FooterProps) {
  return (
    <div
      className="px-5 py-3 text-[9px] leading-snug"
      style={{ color: neutral.faint, borderTop: `1px solid ${neutral.border}` }}
    >
      {company}
      <br />
      {tagline}
    </div>
  )
}
