export type VerseWord = {
  id: string;
  text: string;
  location: string;
  position: number;
  translation: {
    text: string;
  };
  transliteration: {
    text: string;
  };
};

export type Verse = {
  id: number;
  verse_number: number;
  text_uthmani: string;
  verse_key: string;
  translations: {
    id: string;
    resource_id: number;
    text: string;
  };
  words: VerseWord[];
};

export type VersePagination = {
  per_page: number;
  current_page: number;
  total_pages: number;
  total_count: number;
};

export enum GetVerseBy {
  Chapter = 'by_chapter',
  Juz = 'by_juz',
}

export type GetVerseParams = {
  lang?: string;
  words?: boolean;
  per_page?: number;
  id: number;
  page?: number;
  getBy: GetVerseBy;
};

export type GetVerseByJuzParams = {
  lang?: string;
  words?: boolean;
  per_page?: number;
  id: number;
  page?: number;
};

export type VersesResponse = {
  verses: Verse[];
  pagination: VersePagination;
};
