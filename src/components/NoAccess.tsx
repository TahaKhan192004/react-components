import { Lock } from 'lucide-react'
import { neutral } from '@/tokens'
import { Card } from './Card'
import { Btn } from './Btn'

interface NoAccessProps {
  onBack?: () => void
  message?: string
}

// Permission-denied state — shown when a user's role can't access a module.
// Source: NoAccess() in apip.html
export function NoAccess({
  onBack,
  message = "Ask an administrator to grant access in Access Control.",
}: NoAccessProps) {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: neutral.soft }}
        >
          <Lock size={22} color={neutral.faint} />
        </div>
        <div className="text-sm font-bold">This module isn't enabled for your department</div>
        <p className="max-w-sm text-[12px]" style={{ color: neutral.sub }}>{message}</p>
        {onBack && <Btn dark onClick={onBack}>Go to dashboard</Btn>}
      </div>
    </Card>
  )
}
