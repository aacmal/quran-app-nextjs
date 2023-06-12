import React from 'react';

type OptionListProps = {
  onClick: () => void;
  children: React.ReactNode;
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

export default OptionList;
