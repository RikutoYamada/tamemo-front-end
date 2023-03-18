import clsx from 'clsx'
import React, { ReactNode } from 'react';

// TODO: パスの指定方法がうまくいかない修正必要あり（とりあえず一時凌ぎ状態)
import { Spinner } from '../Spinner';

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

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  refInProps?: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
  onClick: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | (() => void)
} & IconProps;

export const Button = (
  {
    type = 'button',
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    startIcon,
    endIcon,
    refInProps,
    onClick,
    children
  }: ButtonProps
) => {
  return (
    <button
      ref={refInProps}
      type={type}
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      {!isLoading && startIcon}
      <span className="mx-2">{children}</span> {!isLoading && endIcon}
    </button>
  );
}