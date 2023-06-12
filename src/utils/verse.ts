import { makeUrl } from './api';
import queryString from 'query-string';
import { GetVerseParams, Verse } from './types/Verse';

const translations_lists = [
  {
    id: 131,
    language_name: 'english',
  },
  {
    id: 33,
    language_name: 'indonesian',
  },
];

export const getSpecificVerse = async (
  verseKey: string,
  lang = 'id'
): Promise<{
  verses: Verse;
}> => {
  const params = {
    language: lang,
    fields: 'text_uthmani',
    translation_fields: ['resource_name', 'language_id'],
    translations:
      lang === 'id' ? translations_lists[1].id : translations_lists[0].id,
    per_page: 1,
  };

  const response = await fetch(
    makeUrl(`/verses/by_key/${verseKey}`, queryString.stringify(params))
  );
  const data = await response.json();
  return data;
};

export const getAllVerseByChapter = async ({
  chapterId,
  lang = 'id',
}: GetVerseParams): Promise<{
  verses: Verse[];
}> => {
  // const params = 'language=id&fields=text_uthmani&translation_fields=resource_name,language_id&translations=33&per_page=220'
  const params = {
    words: 'true',
    language: lang,
    fields: 'text_uthmani',
    translation_fields: ['resource_name', 'language_id'],
    translations:
      lang === 'id' ? translations_lists[1].id : translations_lists[0].id,
    per_page: 286, // Maximum ayah of surah al - baqarah
    word_fields: 'text_uthmani, location',
  };
  const response = await fetch(
    makeUrl(`/verses/by_chapter/${chapterId}`, queryString.stringify(params))
  );
  const data = response.json();
  return data;
};

export const getVersesByJuz = async (juzId, lang = 'id') => {
  const params = {
    language: lang,
    fields: 'text_uthmani',
    translation_fields: ['resource_name', 'language_id'],
    translations:
      lang === 'id' ? translations_lists[1].id : translations_lists[0].id,
    per_page: 286, // Maximum ayah of surah al - baqarah
  };

  const response = await fetch(
    makeUrl(`/verses/by_juz/${juzId}`, queryString.stringify(params))
  );
  const data = response.json();
  return data;
};
