import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function QuranPage() {
  return redirect('/quran/surah');
}
