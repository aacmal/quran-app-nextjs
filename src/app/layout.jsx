import classNames from 'classnames';
import './globals.css';
import { Lato } from 'next/font/google';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata = {
  title: 'Aplikasi Quran Digital',
  description: 'Aplikasi Quran Digital dengan berbagai fitur menarik, seperti: terjemahan, tafsir, audio, dan lain-lain.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
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
