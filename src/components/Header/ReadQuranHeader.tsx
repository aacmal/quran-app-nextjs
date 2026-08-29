import React from 'react';
import Header from '.';
import Search from '@components/Search';

type Props = {
  title?: string;
};

const ReadQuranHeader = ({ title = "Baca Al-Qur'an Online" }: Props) => {
  return <Header search={<Search />}>{title}</Header>;
};

export default ReadQuranHeader;
