import type { HTMLAttributes } from 'react'

export function Container({ children, className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-6 ${className}`} {...rest}>
      {children}
    </div>
  )
}
