import { makeUrl } from './api';
import { Juz } from './types/Juz';

export const getJuzs = async (
  lang = 'id'
): Promise<{
  juzs: Juz[];
}> => {
  const response = await fetch(makeUrl(`/juzs`, `language=${lang}`));
  const data = await response.json();
  return data;
};
