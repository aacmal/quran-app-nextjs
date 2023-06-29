import { getChapter } from '@utils/chapter';
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasChapterId = searchParams.has('chapterId');

    if (!hasChapterId) {
      return new ImageResponse(
        (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            Missing chapterId
          </div>
        )
      );
    }

    const chapterData = await getChapter(
      parseInt(searchParams.get('chapterId'))
    );

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '-.02em',
            fontWeight: 700,
            background: 'white',
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                background: '#10b981',
                borderRadius: '100%',
              }}
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                color: '#10b981',
              }}
            >
              quran.acmal.me
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 20px',
              fontSize: 32,
              width: '100%',
              maxWidth: 750,
              textAlign: 'center',
              backgroundColor: '#10b981',
              color: 'white',
              lineHeight: 1.4,
              borderRadius: '15px',
              flexWrap: 'nowrap',
            }}
          >
            <div
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              {chapterData.name_complex}
            </div>
            <div>{chapterData.name_arabic}</div>
          </div>
        </div>
      )
    );
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}
