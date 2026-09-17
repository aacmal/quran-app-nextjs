"use client";

import React, { useCallback, useState } from "react";
import useStore from "../../store/surahStore";
import Link from "next/link";
import { LocalChapter } from "data/chapter/type";

type SearchProps = {
  className?: string;
  placeholder?: string;
  ariaLabel?: string;
};

const Search = ({
  className,
  placeholder = "Cari Surah",
  ariaLabel = placeholder,
}: SearchProps) => {
  const allChapters = useStore((state) => state.chapterData);
  const notFound = {
    id: null,
    name_simple: "Ketik untuk mencari",
    verses_count: 0,
    revelation_place: "",
  };

  const [filteredChapters, setFilteredChapters] = useState<LocalChapter[]>([
    {
      ...notFound,
    },
  ]);
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const keyword = e.target.value;

      if (keyword !== "") {
        const result = allChapters.filter((chapters) => {
          return chapters.name_simple
            .toLowerCase()
            .includes(keyword.toLowerCase());
        });
        setFilteredChapters(() => {
          if (result.length > 0) {
            return result;
          } else {
            return [{ ...notFound }];
          }
        });
      } else {
        setFilteredChapters([
          {
            ...notFound,
          },
        ]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allChapters]
  );

  function handleBlur() {
    setTimeout(() => {
      setExpanded(false);
    }, 200);
  }

  return (
    <div className="relative">
      <label htmlFor="pencarian-surat" className="sr-only">
        {ariaLabel}
      </label>
      <input
        id="pencarian-surat"
        onFocus={() => setExpanded(true)}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
        type="text"
        role="combobox"
        aria-label={ariaLabel}
        aria-autocomplete="list"
        aria-expanded={isExpanded}
        aria-controls="hasil-pencarian-surat"
        className={`bg-gray-100 w-full dark:bg-slate-600 dark:text-slate-200 dark:ring-emerald-500 py-2 px-3 my-3 rounded-lg outline-none focus:ring-2 ring-emerald-300 transition-all ${
          className ?? ''
        }`}
        placeholder={placeholder}
      />
      {isExpanded && (
        <div
          id="hasil-pencarian-surat"
          role="listbox"
          aria-label="Hasil pencarian surat"
          className="absolute right-0 z-50 max-h-96 w-full overflow-auto rounded border border-emerald-300/50 bg-white p-2 text-slate-900 shadow-lg dark:bg-slate-600 dark:text-slate-100 lg:w-72"
        >
          {filteredChapters.length > 0 &&
            filteredChapters.map((e) => (
              <Link
                href={`/surah/${e.id ? e.id : ""}`}
                key={e.id}
                role="option"
                className="block cursor-pointer rounded px-2 py-1 hover:bg-emerald-200 focus-visible:bg-emerald-200 focus-visible:outline-none dark:hover:bg-emerald-600 dark:focus-visible:bg-emerald-600"
              >
                {e.name_simple}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
