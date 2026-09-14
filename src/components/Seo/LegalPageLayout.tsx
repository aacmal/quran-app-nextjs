import Link from 'next/link';
import React from 'react';

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  eyebrow,
  title,
  updatedAt,
  children,
}: LegalPageLayoutProps) {
  return (
    <main
      id="konten-utama"
      className="min-h-screen bg-gray-100 px-5 py-10 dark:bg-slate-800 lg:py-14"
    >
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 text-slate-700 shadow-lg shadow-emerald-900/5 dark:bg-slate-700 dark:text-slate-100 lg:p-10">
        <header className="mb-8 border-b border-emerald-500/20 pb-6 dark:border-emerald-400/20">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              {eyebrow}
            </span>
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 hover:underline dark:text-emerald-400 dark:hover:bg-slate-600"
            >
              Kembali ke beranda
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
            Terakhir diperbarui: {updatedAt}
          </p>
        </header>

        <div className="space-y-8 text-base leading-8">{children}</div>

        <footer className="mt-10 border-t border-emerald-500/20 pt-6 text-sm text-slate-500 dark:border-emerald-400/20 dark:text-slate-300">
          <nav aria-label="Halaman informasi">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/syarat-ketentuan"
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </article>
    </main>
  );
}
