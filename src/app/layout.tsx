import classNames from 'classnames';
import './globals.css';
import { Lato } from 'next/font/google';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import GoogleAnalytics from '@components/GoogleAnalytics/GoogleAnalytics';
import { canonicalUrl } from '@utils/seo';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: canonicalUrl,
};

const AudioPlayer = dynamic(
  () => import('@components/AudioPlayer/AudioPlayer'),
  {
    ssr: false,
  }
);

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <GoogleAnalytics />
      <body
        className={classNames(
          lato.className,
          'dark:bg-slate-800 bg-white min-h-screen'
        )}
      >
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
