import classNames from 'classnames';
import DeveloperUtility from '@components/TopBar/DeveloperUtility/DeveloperUtility';
import Search from '@components/Search';
import React from 'react';

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
  search?: React.ReactNode;
};

const Header = ({ className, children, search }: HeaderProps) => {
  return (
    <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col px-5 xl:px-0">
      <div className="w-full flex justify-between lg:pr-5">
        <h1
          className={classNames(
            'text-xl font-bold text-emerald-500',
            className
          )}
        >
          {children}
        </h1>
        <DeveloperUtility />
      </div>
      {search}
    </div>
  );
};

export default Header;
