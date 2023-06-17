import React from 'react';
import Header from '.';
import Search from '@components/Search';

type Props = {};

const ReadQuranHeader = (props: Props) => {
  return <Header search={<Search className="max-w-3xl" />}>Baca Quran</Header>;
};

export default ReadQuranHeader;
