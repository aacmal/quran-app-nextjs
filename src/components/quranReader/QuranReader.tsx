import Bismillah from "./Bismillah";
import { GetVerseBy, Verse } from "@utils/types/Verse";
import InitialSurahVerse from "./InitialSurahVerse";
import dynamic from "next/dynamic";

const FetchInfiniteVerse = dynamic(() => import("./FetchInfiniteVerse"), {
  ssr: false,
});

type QuranReaderProps = {
  versesData: Verse[];
  bismillahPre?: boolean;
  versesCount: number;
  id: number;
  type: "chapter" | "juz";
};

const QuranReader = ({
  versesData,
  bismillahPre,
  versesCount,
  id,
  type,
}: QuranReaderProps) => {
  return (
    <div className="mt-3">
      <>
        <Bismillah className={!bismillahPre && "hidden"} />
        <div className="text-justify mt-12">
          <InitialSurahVerse versesData={versesData} />
          <FetchInfiniteVerse
            getVerseBy={
              type === "chapter" ? GetVerseBy.Chapter : GetVerseBy.Juz
            }
            totalData={versesCount}
            id={id}
          />
        </div>
      </>
    </div>
  );
};

export default QuranReader;
