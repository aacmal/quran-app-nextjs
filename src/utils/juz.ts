import { makeUrl } from './api';
import { Juz } from './types/Juz';

export const getJuzs = async (
  lang = 'id'
): Promise<{
  juzs: Juz[];
}> => {
  const response = await fetch(makeUrl(`/juzs`, `language=${lang}`));
  const data: { juzs: Juz[] } = await response.json();
  const juzByNumber = new Map<number, Juz>();

  data.juzs.forEach((juz) => {
    if (juz.juz_number < 1 || juz.juz_number > 30) return;

    const currentJuz = juzByNumber.get(juz.juz_number);
    if (!currentJuz || juz.id === juz.juz_number) {
      juzByNumber.set(juz.juz_number, {
        ...juz,
        id: juz.juz_number,
      });
    }
  });

  return {
    juzs: Array.from(juzByNumber.values()).sort(
      (firstJuz, secondJuz) => firstJuz.juz_number - secondJuz.juz_number
    ),
  };
};

export const getJuzData = async (id: number): Promise<Juz> => {
  const response = await fetch(makeUrl(`/juzs/${id}`));
  const data = await response.json();
  return data.juz;
};
