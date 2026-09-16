import ContentNavigation from "@components/Seo/ContentNavigation";
import React from "react";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getVerses } from "@utils/verse";
import Wrapper from "@components/Wrapper";
import QuranReader from "@components/quranReader/QuranReader";
import {
  createMetaDescription,
  createPageMetadata,
  noIndexRobots,
} from "@utils/seo";
import { getJuzData, getJuzs } from "@utils/juz";
import { GetVerseBy } from "@utils/types/Verse";
import JsonLd from "@components/Seo/JsonLd";
import { createJuzJsonLd } from "@utils/seo";
import Breadcrumbs from "@components/Seo/Breadcrumbs";

type Props = {
  params: {
    juzId: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await getJuzs();
  const paths = res.juzs.map((item) => ({
    juzId: item.id.toString(),
  }));

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const juzId = Number(params.juzId);
  if (!Number.isInteger(juzId) || juzId < 1 || juzId > 30) {
    return {
      title: "Juz tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  const juzData = await getJuzData(juzId);

  if (!juzData) {
    return {
      title: "Juz tidak ditemukan",
      robots: noIndexRobots,
    };
  }

  const chapterCount = juzData.verse_mapping
    ? Object.keys(juzData.verse_mapping).length
    : 0;
  const title = `Al-Qur'an Juz ${juzData.id}: Arab, Latin, Terjemahan & Tafsir`;
  const description = createMetaDescription(
    `Baca Al-Qur'an Juz ${juzData.id} yang memuat ${chapterCount} surat dan ${juzData.verses_count} ayat dalam teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, dan tafsir.`
  );

  return createPageMetadata({
    title,
    description,
    path: `/juz/${juzData.id}`,
    type: "article",
  });
}

export default async function JuzPage({ params }: Props) {
  const juzId = Number(params.juzId);
  if (!Number.isInteger(juzId) || juzId < 1 || juzId > 30) {
    notFound();
  }

  const juzData = await getJuzData(juzId);
  if (!juzData) {
    notFound();
  }

  const juzVerses = await getVerses({
    id: juzId,
    getBy: GetVerseBy.Juz,
  });

  return (
    <>
      <JsonLd
        data={createJuzJsonLd({
          juzId: juzData.id,
          path: `/juz/${juzData.id}`,
          description: createMetaDescription(
            `Baca Al-Qur'an Juz ${juzData.id} dalam teks Arab, transliterasi Latin, terjemahan bahasa Indonesia, dan tafsir.`
          ),
        })}
      />
      <Wrapper className="my-14 px-5 2xl:px-0 pb-20">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Daftar Juz", href: "/juz" },
            { label: `Juz ${juzData.id}` },
          ]}
        />
        <h1 className="mb-5 text-xl font-bold text-emerald-500">
          Al-Qur&apos;an Juz {juzData.id}
        </h1>
        <QuranReader
          bismillahPre={true}
          type="juz"
          versesData={juzVerses.verses}
          versesCount={juzData.verses_count}
          id={juzData.id}
        />
        <ContentNavigation
          previous={
            juzData.id > 1
              ? {
                  href: `/juz/${juzData.id - 1}`,
                  label: `Juz sebelumnya: ${juzData.id - 1}`,
                }
              : undefined
          }
          next={
            juzData.id < 30
              ? {
                  href: `/juz/${juzData.id + 1}`,
                  label: `Juz berikutnya: ${juzData.id + 1}`,
                }
              : undefined
          }
        />
      </Wrapper>
    </>
  );
}
