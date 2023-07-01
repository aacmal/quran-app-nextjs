export type Juz = {
  id: number;
  juz_number: number;
  verse_mapping: {
    [key: string]: string;
  };
  first_verse_id: number;
  last_verse_id: number;
  verses_count: number;
};
