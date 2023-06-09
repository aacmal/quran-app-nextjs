import React from 'react';
import TopBar from '../../../../components/TopBar/TopBar';

const SurahLayout = ({ children }) => {
  return <>
    <TopBar />
    {children}
    </>;
};

export default SurahLayout;
