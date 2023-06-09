import { getAllChaptersData } from '../../../utils/chapter';
import Chapters from '../../../components/chapters';

async function getChapterData() {
  const res = await getAllChaptersData();
  return res.chapters;
}

export default async function HomePage() {
  const allChapters = await getChapterData();
  return (
    <Chapters chapterLists={allChapters}/>
  );
}
