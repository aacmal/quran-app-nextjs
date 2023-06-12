export type Tafsir = {
  id: number;
  surah_id: number;
  ayah_id: number;
  juz: number;
  arabic: string;
  latin: string;
  translation: string;
  surah: {
    id: number;
    arabic: string;
    latin: string;
    transliteration: string;
    translation: string;
    num_ayah: number;
    location: string;
  };
};
