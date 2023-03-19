import clsx from 'clsx'
import React from 'react'
type TextFieldProps = React.ComponentProps<'input'> & {
  label?: string
}
export const TextField = (
  {
    className = '',
    type = 'text',
    placeholder,
    onChange,
    label
  }: TextFieldProps
) => {
  return (
    <>
      <label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
      <input className={clsx('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', className)}
      type={type} placeholder={placeholder} onChange={onChange} />
    </>
  )
}