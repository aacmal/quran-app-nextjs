import React from 'react';

type ChapterWrapperProps = {
  children: React.ReactNode;
};

const ChapterWrapper = ({ children }: ChapterWrapperProps) => {
  return (
    <div className="p-3 py-4 h-fit md:h-28 bg-white dark:bg-slate-600 text-gray-900 dark:text-slate-200  rounded-xl flex justify-between items-center border lg:border-2 border-transparent hover:border-emerald-500 group transition-all cursor-pointer hover:shadow-emerald-100 dark:hover:shadow-emerald-800 shadow-lg shadow-transparent">
      {children}
    </div>
  );
};

export default ChapterWrapper;
