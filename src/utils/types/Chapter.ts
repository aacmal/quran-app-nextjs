export type Chapter = {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_complex: string;
  name_arabic: string;
  name_simple: string;
  verses_count: number;
  translated_name: {
    language_name: string;
    name: string;
  };
  pages: number[];
};

export type ChapterInfo = {
  id: number;
  chapter_id: number;
  short_text: string;
  text: string;
  source: string;
};
