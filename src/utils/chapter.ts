import { LocalChapter } from 'data/chapter/type';
import { makeUrl } from './api';
import { Chapter, ChapterInfo } from './types/Chapter';

export const getAllChaptersData = async (
  lang = 'id'
): Promise<{
  chapters: Chapter[];
}> => {
  const response = await fetch(makeUrl(`/chapters`, `language=${lang}`));
  const data = await response.json();
  return data;
};

export const getChapterInfo = async (
  chapterId: number,
  lang = 'id'
): Promise<{
  chapter_info: ChapterInfo;
}> => {
  const response = await fetch(
    makeUrl(`/chapters/${chapterId}/info`, `language=${lang}`)
  );
  const data = await response.json();
  return data;
};

export const getChapter = async (
  chapterId: number,
  lang = 'id'
): Promise<Chapter> => {
  const response = await fetch(
    makeUrl(`/chapters/${chapterId}`, `language=${lang}`)
  );
  const data = await response.json();
  return data.chapter;
};

export const getLocalChapter = (lang = 'id'): Promise<LocalChapter[]> => {
  return new Promise((resolve) => {
    import(`../../data/chapter/${lang}.json`).then((data) => {
      const array = Object.keys(data.default).map((key) => ({
        id: parseInt(key),
        verses_count: data.default[key].versesCount,
        name_simple: data.default[key].transliteratedName,
        revelation_place: data.default[key].revelationPlace,
      }));
      resolve(array);
    });
  });
};
