import Link from "next/link";
import React from "react";

type QuranSwitchProps = {
  active?: string;
  variant?: "default" | "home";
};

const QuranSwitch = ({ active, variant = "default" }: QuranSwitchProps) => {
  const isHome = variant === "home";

  return (
    <nav aria-label="Pilih bacaan" className="w-fit">
      <div className="relative flex w-40 cursor-pointer items-center py-1">
        <Link
          className="z-10 mr-2 w-20 rounded-md px-2 py-1 text-center text-sm dark:text-gray-50"
          href={isHome ? "/" : "/surah"}
          aria-current={isHome || active !== "juz" ? "page" : undefined}
          replace
        >
          {isHome ? "Surat" : "Chapters"}
        </Link>
        <Link
          className="z-10 w-20 rounded-md px-2 py-1 text-center text-sm dark:text-gray-50"
          href="/juz"
          aria-current={active === "juz" ? "page" : undefined}
          replace
        >
          {isHome ? "Juz" : "Juzs"}
        </Link>
        <div
          aria-hidden="true"
          className={`absolute z-0 h-full w-20 rounded-md bg-white transition-all dark:bg-slate-600 ${
            active === "juz" ? "left-1/2" : "left-0"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default QuranSwitch;
