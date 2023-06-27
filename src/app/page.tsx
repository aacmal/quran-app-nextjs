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
  return <></>;
}
