// export const getSingleTafsir = async (verseKey, lang) => {
//     //for now only support english and indonesian
//     if(lang === 'id'){
//         const response = await fetch(`https://quran.kemenag.go.id/api/v1/tafsirbyayat/${verseKey}`)
//         const data = await response.json()
//         return data
//     }
//     const response = await fetch(`https://api.qurancdn.com/api/qdc/tafsirs/en-tafisr-ibn-kathir/by_ayah/${verseKey}?locale=en&mushaf=7`)
//     const data = await response.json()
//     return data
// }

import { Tafsir } from './types/Tafsir';

export const getTafsirByVerseId = async (verseId: number): Promise<Tafsir> => {
  const response = await fetch(
    `https://web-api.qurankemenag.net/quran-tafsir/${verseId}`
  );
  const data = await response.json();
  return data.data;
};
