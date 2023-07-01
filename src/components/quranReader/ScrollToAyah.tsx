'use client';

import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const ScrollToAyah = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  useEffect(() => {
    if (!searchParams.has('ayah')) return;
    const ayah = searchParams.get('ayah');
    if (Number(ayah) > 20) return;
    const verseElement = document.querySelector(
      `[data-verse="${params.chapterId}:${ayah}"]`
    ) as HTMLElement;

    if (!verseElement) return;

    verseElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  return <></>;
};

export default ScrollToAyah;
