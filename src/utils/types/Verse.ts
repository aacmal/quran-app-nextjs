export type VerseWord = {
  id: string;
  text: string;
  location: string;
  position: string;
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

export type GetVerseParams = {
  lang?: string;
  words?: boolean;
  per_page?: number;
  chapterId?: number;
};
