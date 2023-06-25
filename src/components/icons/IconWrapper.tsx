import React from 'react';
import classNames from 'classnames';

type IconWrapperProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onHover?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconWrapper = ({
  children,
  className,
  onClick,
  onHover,
  ...props
}: IconWrapperProps) => (
  <button
    {...props}
    onClick={onClick}
    className={classNames(
      'h-10 w-10 grid place-items-center rounded cursor-pointer',
      className,
      onHover
        ? onHover
        : 'md:hover:bg-emerald-200/60 md:dark:hover:bg-emerald-500/60 md:dark:hover:text-white'
    )}
  >
    {children}
  </button>
);

export default IconWrapper;
