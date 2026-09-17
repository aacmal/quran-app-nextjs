import React from 'react';
import classNames from 'classnames';

type ChapterWrapperProps = {
  children: React.ReactNode;
  fluid?: boolean;
};

const ChapterWrapper = ({ children, fluid = false }: ChapterWrapperProps) => {
  return (
    <div
      className={classNames(
        'p-3 py-4 bg-white dark:bg-slate-600 text-gray-900 dark:text-slate-200 rounded-xl flex justify-between items-center border lg:border-2 border-transparent hover:border-emerald-500 group transition-all cursor-pointer hover:shadow-emerald-100 dark:hover:shadow-emerald-800 shadow-lg shadow-transparent',
        fluid ? 'h-fit min-h-[7rem]' : 'h-fit md:h-28'
      )}
    >
      {children}
    </div>
  );
};

export default ChapterWrapper;
