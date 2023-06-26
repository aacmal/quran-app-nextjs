import React from 'react';
import Header from '.';
import Search from '@components/Search';

type Props = {};

const ReadQuranHeader = (props: Props) => {
  return <Header search={<Search />}>Baca Quran</Header>;
};

export default ReadQuranHeader;
