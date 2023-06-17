export type HadithBook = {
  name: string;
  id: string;
  available: number;
};

export type HadithContent = {
  number: number;
  arab: string;
  id: string;
};

export type HaditsDetail = HadithBook & {
  requested: number;
  hadiths: HadithContent[];
};
