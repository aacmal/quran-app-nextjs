"use client";

import Link from "next/link";
import BookmarkedVerseLists from "@components/Bookmark/BookmarkedVerseLists";
import HomeHeader from "@components/Header/HomeHeader";
import ReadQuranHeader from "@components/Header/ReadQuranHeader";
import QuranSwitch from "@components/Switch";
import Wrapper from "@components/Wrapper";
import classNames from "classnames";
import { useSelectedLayoutSegments } from "next/navigation";

export default function HomePage({ children }) {
  const layoutSegments = useSelectedLayoutSegments();
  const isJuzPage = layoutSegments[0] === "juz";
  const isHomePage = layoutSegments.length === 0;

  // remove Header and orther components if the path is in surah/[id]
  if (layoutSegments.length >= 2) {
    return (
      <main id="konten-utama" aria-label="Konten utama">
        {children}
      </main>
    );
  }

  const footer = (
    <footer className="border-t border-emerald-500/20 px-5 py-5 text-center text-sm text-slate-500 dark:border-emerald-400/20 dark:text-slate-300 xl:px-0">
      <nav aria-label="Halaman informasi" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        <Link
          href="/kebijakan-privasi"
          className="text-emerald-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400"
        >
          Kebijakan Privasi
        </Link>
        <Link
          href="/syarat-ketentuan"
          className="text-emerald-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400"
        >
          Syarat &amp; Ketentuan
        </Link>
      </nav>
    </footer>
  );

  return (
    <Wrapper className="px-0 xl:px-5 2xl:px-0">
      {isHomePage ? (
        <HomeHeader />
      ) : (
        <ReadQuranHeader
          title={isJuzPage ? "Baca Al-Qur'an per Juz" : "Baca Al-Qur'an Online"}
        />
      )}
      <div
        className={classNames(
          "bg-gray-100 dark:bg-slate-700 min-h-screen rounded-t-2xl",
          isHomePage
            ? "mt-5 px-5 pt-5 pb-10 xl:px-6 xl:pt-6 xl:pb-12"
            : "px-5 py-5 lg:p-12 lg:pb-32 pb-32"
        )}
      >
        <QuranSwitch active={layoutSegments[0]} variant={isHomePage ? "home" : "default"} />
        <main
          id="konten-utama"
          aria-label="Konten utama"
          className={isHomePage ? "pt-3" : undefined}
        >
          {isHomePage && <BookmarkedVerseLists compact />}
          {!isHomePage && <BookmarkedVerseLists />}
          {children}
        </main>
      </div>
      {footer}
    </Wrapper>
  );
}
