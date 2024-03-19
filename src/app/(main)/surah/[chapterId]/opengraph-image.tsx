import { getChapter } from "@utils/chapter";
import { ImageResponse } from "next/og";
import { Lato } from "next/font/google";

export const runtime = "edge";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { chapterId: string };
}) {
  const chapterData = await getChapter(parseInt(params.chapterId));
  const NastaleeqFont = await fetch(
    new URL(
      "../../../../utils/fonts/nastaleeq/indopak/indopak-nastaleeq-waqf-lazim-v4.2.1.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  const LatoFont = await fetch(
    new URL("../../../../utils/fonts/Lato-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          gap: 20,
          fontFamily: "Lato",
          padding: 25,
          width: "100%",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            top: 10,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: "#10b981",
              borderRadius: "100%",
            }}
          />
          <span
            style={{
              fontSize: 25,
              color: "#10b981",
              fontWeight: "bold",
            }}
          >
            https://quran.acml.me
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px",
            height: "100%",
            fontSize: 32,
            width: "100%",
            textAlign: "center",
            backgroundColor: "#10b981",
            color: "white",
            lineHeight: 1.4,
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 80,
                fontWeight: "bold",
              }}
            >
              {chapterData.name_complex}
            </span>
            <span
              style={{
                fontWeight: 50,
                fontStyle: "italic",
                fontSize: 50,
              }}
            >
              ({chapterData.translated_name.name})
            </span>
            <div
              style={{
                marginTop: 20,
              }}
            />
            <span
              style={{
                fontSize: 25,
              }}
            >
              {chapterData.verses_count} Ayah
            </span>
            <span
              style={{
                fontSize: 25,
              }}
            >
              Diturunkan di
              <span
                style={{
                  textTransform: "capitalize",
                  marginLeft: 5,
                }}
              >
                {chapterData.revelation_place}
              </span>
            </span>
          </div>
          <div
            style={{
              fontSize: 140,
              fontFamily: "Nastaleeq",
            }}
          >
            {chapterData.name_arabic}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Nastaleeq",
          data: NastaleeqFont,
          style: "normal",
        },
        {
          name: "Lato",
          data: LatoFont,
          style: "normal",
        },
      ],
    }
  );
}
