import clsx from "clsx"

const sizes = {
  sm: 'w-1/4',
  md: 'w-1/2',
  lg: 'w-4/5'
}

export type CardProps = {
  className?: string
  size?: keyof typeof sizes
  children: React.ReactNode
}

export const Card = (
  {
    className = '',
    size = 'sm',
    children
  }: CardProps
) => {
  return (
    <div className={clsx('p-6 bg-white border border-gray-200 rounded-lg shadow', sizes[size], className)}>
      {children}
    </div>

  )
}
