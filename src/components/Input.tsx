import { neutral } from '@/tokens'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  error?: boolean
}

export function Input({ error, ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full rounded-lg px-2.5 py-1.5 text-[12px] outline-none border-0"
      style={{
        border: `1px solid ${error ? '#EF4444' : neutral.border}`,
        background: '#fff',
        color: neutral.ink,
      }}
    />
  )
}
