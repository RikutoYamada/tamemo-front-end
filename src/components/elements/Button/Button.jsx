import clsx from 'clsx'

const variants = {
  primary: 'bg-teal-500 hover:bg-teal-700 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

const Button = (
  {
    className = '',
    type = 'button',
    variant = 'primary',
    size = 'md',
    children
  }
) => {
  return (
    <button
      type = {type}
      className={clsx('font-bold rounded', className, variants[variant], sizes[size])}
      >
      {children}
    </button>
  )
}

export default Button