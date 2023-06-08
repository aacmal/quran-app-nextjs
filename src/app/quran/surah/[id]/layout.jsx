import React from 'react';
import TopBar from '../../../../components/TopBar/TopBar';

const SurahLayout = ({ children }) => {
  return <div className="px-5 pb-20">
    <TopBar />
    {children}
    </div>;
};

export default SurahLayout;
