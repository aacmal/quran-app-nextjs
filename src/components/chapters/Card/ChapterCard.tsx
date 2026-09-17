import Link from "next/link";
import React from "react";
import { StarIcon } from "../../icons";
import ChapterWrapper from "./ChapterWrapper";
import classNames from "classnames";
import { nastaleeqClassName } from "@utils/fonts";

type ChapterCardProps = {
  chapterId: number;
  translated_name: string;
  name_arabic: string;
  name_simple: string;
  verse_mapping?: string;
  verses_count?: number;
  homepage?: boolean;
};

const ChapterCard = ({
  chapterId,
  translated_name,
  name_arabic,
  name_simple,
  verse_mapping,
  verses_count,
  homepage = false,
}: ChapterCardProps) => {
  const verseLabel =
    verse_mapping ??
    (verses_count === undefined ? undefined : `${verses_count} ayat`);

  return (
    <Link
      href={`/surah/${chapterId}`}
      className={
        homepage
          ? "group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-700"
          : undefined
      }
    >
      <ChapterWrapper fluid={homepage}>
        {homepage ? (
          <>
            <div className="flex min-w-0 items-center">
              <div className="relative mr-3 grid h-11 w-11 shrink-0 place-items-center">
                <span className="text-sm font-semibold">{chapterId}</span>
                <StarIcon
                  aria-hidden="true"
                  focusable="false"
                  className="absolute"
                />
              </div>
              <div className="min-w-0">
                <span className="block break-words text-lg font-bold leading-tight sm:text-xl">
                  {name_simple}
                </span>
                <span className="block break-words text-sm font-normal text-slate-500 dark:text-slate-300 lg:text-base">
                  {translated_name}
                </span>
              </div>
            </div>
            <div className="ml-3 flex min-w-0 max-w-[46%] shrink-0 flex-col items-end text-right">
              <span
                className={classNames(
                  "mb-1 block break-words text-3xl leading-tight group-hover:text-emerald-500",
                  nastaleeqClassName
                )}
                lang="ar"
                dir="rtl"
              >
                {name_arabic}
              </span>
              {verseLabel && (
                <span className="text-sm font-bold">{verseLabel}</span>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <div className="relative grid place-items-center h-11 w-11 mr-3">
                <span className="text-sm font-semibold">{chapterId}</span>
                <StarIcon className="absolute" />
              </div>
              <div>
                <span className="font-bold text-xl block mb-1">{name_simple}</span>
                <span className="font-normal dark:text-slate-300 text-slate-500 text-sm block lg:text-base">
                  {translated_name}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span
                className={classNames(
                  "text-3xl group-hover:text-emerald-500 block mb-1",
                  nastaleeqClassName
                )}
              >
                {name_arabic}
              </span>
              {verse_mapping && (
                <span className="font-bold">{verse_mapping}</span>
              )}
            </div>
          </>
        )}
      </ChapterWrapper>
    </Link>
  );
};

export default ChapterCard;
