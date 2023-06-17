import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@components/Wrapper';
import { Metadata } from 'next';
import {
  defaultOpenGraph,
  defaultTwitter,
  staticDescription,
  staticTitle,
} from '@utils/seo';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  title: staticTitle['/'],
  description: staticDescription['/'],
  robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
  openGraph: {
    ...defaultOpenGraph,
  },
  twitter: {
    ...defaultTwitter,
  },
};

export default function HomePage() {
  return (
    <Wrapper className="flex flex-col items-center gap-20 justify-center min-h-screen !pt-0 !max-w-none !w-screen bg-gradient-to-br from-emerald-400 to-emerald-600">
      <h1 className="lg:text-5xl text-3xl bg-clip-text text-emerald-200 font-bold">
        Assalamu&apos;alakum
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Link
          className="p-3 text-center w-fit bg-emerald-400/70 border-emerald-300 rounded-lg border-2 transition-all hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-600"
          href="/quran"
        >
          <Image
            src="/images/read_quran.png"
            alt="Baca Quran"
            width={200}
            height={200}
          />
          <span className="font-semibold text-emerald-50 text-xl">
            Baca Quran
          </span>
        </Link>
        <Link
          className="p-3 text-center w-fit bg-emerald-400/70 border-emerald-300 rounded-lg border-2 transition-all hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-600"
          href="/hadits"
        >
          <Image
            src="/images/read_quran.png"
            alt="Baca Quran"
            width={200}
            height={200}
          />
          <span className="font-semibold text-emerald-50 text-xl">Hadits</span>
        </Link>
        <Link
          className="p-3 text-center w-fit bg-emerald-400/70 border-emerald-300 rounded-lg border-2 transition-all hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-600"
          href="/"
        >
          <Image
            src="/images/read_quran.png"
            alt="Baca Quran"
            width={200}
            height={200}
          />
          <span className="font-semibold text-emerald-50 text-xl">Doa</span>
        </Link>
      </div>
      <Link
        className="font-semibold text-emerald-50 text-lg underline"
        href="/credits"
      >
        Credits
      </Link>
    </Wrapper>
  );
}
