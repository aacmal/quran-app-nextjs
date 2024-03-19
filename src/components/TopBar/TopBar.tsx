"use client";
import classNames from "classnames";
import React, { useEffect } from "react";

import DeveloperUtility from "./DeveloperUtility/DeveloperUtility";
import DropdownSurahLists from "./DropdownSurahLists/DropdownSurahLists";
import useSurah from "../../store/surahStore";
import { shallow } from "zustand/shallow";
import useQuranReader from "@stores/quranReaderStore";
import { useParams, usePathname } from "next/navigation";
import DropdownHadithLists from "./DropdownHadithLists/DropdownHadithLists";

const TopBar = () => {
  const { chapterData } = useSurah(
    (state) => ({
      chapterData: state.chapterData,
    }),
    shallow
  );
  const pathname = usePathname();
  const params = useParams();

  const { currentChapter } = useQuranReader(
    (state) => ({
      currentChapter: state.currentChapter,
    }),
    shallow
  );

  const showTopBar =
    Object.hasOwn(params, "chapterId") || Object.hasOwn(params, "juzId");

  if (chapterData.length === 0 || !showTopBar) return <></>;
  return (
    <div
      className={classNames(
        "fixed top-0 bg-gray-100 dark:bg-slate-700 border-b border-emerald-500/50 shadow-lg shadow-emerald-700/10 w-full left-0 z-50 md:py-3  2xl:px-32 md:px-8 px-3 py-2 transition-all justify-between flex"
      )}
    >
      <DropdownSurahLists
        chapterLists={chapterData}
        chapterActive={currentChapter}
      />
      {/* {pathname.includes("/hadits") && <DropdownHadithLists />} */}
      <DeveloperUtility isInSurah={true} />
    </div>
  );
};

export default TopBar;
