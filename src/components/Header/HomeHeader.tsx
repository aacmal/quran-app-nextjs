import DeveloperUtility from '@components/TopBar/DeveloperUtility/DeveloperUtility';
import Search from '@components/Search';

const HomeHeader = () => {
  return (
    <header className="px-5 xl:px-6">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Laman Ayat
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
            Baca Al-Qur’an Online
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-300">
            Baca Al-Qur’an dengan teks Arab, Latin, dan terjemahan bahasa Indonesia.
          </p>
        </div>
        <DeveloperUtility />
      </div>
      <div className="mt-3 max-w-xl">
        <Search placeholder="Cari surat" ariaLabel="Cari surat" />
      </div>
    </header>
  );
};

export default HomeHeader;
