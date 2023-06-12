import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="p-5 max-w-screen-2xl mx-auto">{children}</div>;
};

export default Container;
