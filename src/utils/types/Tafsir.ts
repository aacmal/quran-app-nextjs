export type Tafsir = {
  id: number;
  surah_id: number;
  juz: number;
  arabic: string;
  latin: string;
  translation: string;
  ayah: number;
  surah: {
    id: number;
    arabic: string;
    latin: string;
    transliteration: string;
    translation: string;
    num_ayah: number;
    location: string;
  };
  tafsir: {
    tahlili: string;
    wajiz: string;
    info_surah: string;
    kosakata: string;
    munasabah_prev_surah: string;
    munasabah_prev_theme: string;
    theme_group: string;
  };
};
