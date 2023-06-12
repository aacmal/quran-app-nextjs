import Chapters from '@components/chapters';
import { getAllChaptersData } from '@utils/chapter';

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

export default async function HomePage() {
  const allChapters = await getChapterData();
  return <Chapters chapterLists={allChapters} />;
}
