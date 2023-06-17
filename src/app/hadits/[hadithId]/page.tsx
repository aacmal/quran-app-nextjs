import HadithBanner from '@components/Banner/HadithBanner';
import HadithVerse from '@components/Hadith/HadithVerse';
import Wrapper from '@components/Wrapper';
import { getHadithBooks, getHadithDetail } from '@utils/api/hadith';
import React from 'react';

type Props = {};

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const generateStaticParams = async () => {
  const data = await getHadithBooks();
  return data.map((item) => ({
    hadithId: item.id,
  }));
};

export const generateMetadata = async ({ params }) => {
  const data = await getHadithDetail({ id: params.hadithId });
  return {
    title: `${data.name}`,
    description: `Baca hadits ${data.name} dengan jumlah ${data.available} hadits.`,
    robots: IS_PRODUCTION ? 'index, follow' : 'noindex, nofollow',
    openGraph: {
      title: `${data.name}`,
      description: `Baca hadits ${data.name} dengan jumlah ${data.available} hadits.`,
    },
    twitter: {
      title: `${data.name}`,
      description: `Baca hadits ${data.name} dengan jumlah ${data.available} hadits.`,
    },
  };
};

const HadithDetailPage = async ({
  params,
}: {
  params: {
    hadithId: string;
  };
}) => {
  const data = await getHadithDetail({ id: params.hadithId });
  console.log(data);
  return (
    <Wrapper className="px-5 my-14 2xl:px-0 pb-20">
      <HadithBanner name={data.name} available={data.available} />
      <div className="text-justify">
        {data.hadiths.map((item) => (
          <HadithVerse
            id={item.id}
            key={item.number}
            number={item.number}
            arab={item.arab}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default HadithDetailPage;
