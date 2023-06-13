import classNames from 'classnames';
import React from 'react';

type OptionListProps = {
  onClick: () => void;
  children: React.ReactNode;
  label?: string;
  active?: boolean;
};

const OptionList = ({ onClick, children }: OptionListProps) => {
  return (
    <li
      onClick={onClick}
      className="p-1 px-2 rounded hover:bg-emerald-200 text-sm dark:hover:bg-emerald-500"
    >
      {children}
    </li>
  );
};

export const OptionButton = ({
  onClick,
  children,
  label,
  active,
}: OptionListProps) => (
  <button
    aria-label={label}
    className={classNames(
      'text-sm p-1  px-2 w-fit z-10 text-center cursor-pointer capitalize',
      {
        'text-emerald-500 font-bold bg-white dark:bg-slate-400': active,
      }
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default OptionList;
