import Wrapper from "@components/Wrapper";
import { ArrowIcon } from "@components/icons";
import Link from "next/link";
import React from "react";
import Breadcrumbs from "@components/Seo/Breadcrumbs";
import { getLocalChapter } from "@utils/chapter";

type Props = {
  children: React.ReactNode;
  params: {
    chapterId: string;
    ayahId: string;
  };
};

const SpecificAyahLayout = async ({ children, params }: Props) => {
  const chapters = await getLocalChapter();
  const chapter = chapters.find((item) => item.id === Number(params.chapterId));

  return (
    <Wrapper className="px-5 lg:mt-24 mt-16 pb-20">
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          {
            label: chapter ? `Surat ${chapter.name_simple}` : "Surat",
            href: `/surah/${params.chapterId}`,
          },
          { label: `Ayat ${params.ayahId}` },
        ]}
      />
      <div className="flex justify-between">
        <Link
          href={`/surah/${params.chapterId}`}
          className="bg-emerald-400 w-fit text-emerald-50 px-3 py-2 rounded-md mb-8 flex items-center"
        >
          <ArrowIcon className="h-5 mr-3" />
          <span>Kembali ke surah</span>
        </Link>
      </div>
      {children}
    </Wrapper>
  );
};

export default SpecificAyahLayout;
