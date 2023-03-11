import clsx from 'clsx'

const TextField = (
  {
    className = '',
    label = '',
    placeholder = '',
    type = 'text'
  }
) => {
  return(
  <>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {label}
    </label>
    <input className={clsx('shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
      className)}
      type={type} placeholder={placeholder}></input>
  </>
  )
}

export default TextField