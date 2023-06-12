import React from 'react';

type AdjustmentWrapperProps = {
  children: React.ReactNode;
  title: string;
};

const AdjustmentWrapper = ({ children, title }: AdjustmentWrapperProps) => (
  <div className="h-14 px-4 text-white bg-emerald-400 flex justify-between items-center rounded-lg">
    <div className="font-bold">{title}</div>
    {children}
  </div>
);

export default AdjustmentWrapper;
