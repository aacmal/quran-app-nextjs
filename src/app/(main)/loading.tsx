import ChapterCardSkeleton from "@components/chapters/Card/ChapterCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2">
      {[...Array(3)].map((e, i) => (
        <ChapterCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default Loading;
