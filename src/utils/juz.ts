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

export const getJuzData = async (id: number): Promise<Juz> => {
  const response = await fetch(makeUrl(`/juzs/${id}`));
  const data = await response.json();
  return data.juz;
};
