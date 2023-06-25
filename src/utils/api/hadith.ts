import { HadithBook, HaditsDetail } from '@utils/types/Hadith';
import queryString from 'query-string';

const API_HOST = 'https://api.hadith.gading.dev/';

const makeHaditsUrl = (path: string, parameters?: string) => {
  if (!parameters) {
    return `${API_HOST}${path}`;
  }

  const queryParams = `?${parameters}`;

  return `${API_HOST}${path}${queryParams}`;
};

export const getHadithBooks = (): Promise<HadithBook[]> => {
  return new Promise((resolve) => {
    import('../../../data/hadith/hadith.json').then((data) => {
      resolve(data.data);
    });
  });
};

type HadithContentParams = {
  id: string;
  range?: string; // 1-300 max 300
};
export const getHadithDetail = async ({
  id,
  range = '1-50',
}: HadithContentParams): Promise<HaditsDetail> => {
  const response = await fetch(
    makeHaditsUrl(`books/${id}/`, queryString.stringify({ range })),
    { cache: 'force-cache' }
  );
  const data = await response.json();
  return data.data;
};
