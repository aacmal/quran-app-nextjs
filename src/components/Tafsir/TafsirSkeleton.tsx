import React from 'react';
import Skeleton from '../Skeleton/Skeleton';

const TafsirSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton color="gray" className="h-10 w-2/5" />
      <Skeleton color="gray" className="h-8 w-32" />
      <Skeleton color="gray" className="h-5 w-full" />
      <Skeleton color="gray" className="h-5 w-full" />
      <Skeleton color="gray" className="h-5 w-full" />
      <Skeleton color="gray" className="h-5 w-full" />
      <Skeleton color="gray" className="h-5 w-3/4" />
      <Skeleton color="gray" className="h-12 w-2/5 self-end" />
      <Skeleton color="gray" className="h-5 w-full" />
      <Skeleton color="gray" className="h-5 w-11/12" />
      <Skeleton color="gray" className="h-5 w-full" />
      <Skeleton color="gray" className="h-5 w-4/6" />
    </div>
  );
};

export default TafsirSkeleton;
