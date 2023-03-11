import clsx from "clsx"

const sizes = {
  sm: 'w-1/4',
  md: 'w-1/2',
  lg: 'w-4/5'
}

const Card = (
  {
    className = '',
    size = 'sm',
    children
  }
) => {
  return (
    <div className={clsx('p-6 bg-white border border-gray-200 rounded-lg shadow', sizes[size], className)}>
      {children}
    </div>

  )
}

export default Card