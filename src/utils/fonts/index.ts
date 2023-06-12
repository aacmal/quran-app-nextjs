import classNames from "classnames/bind"
import localFont from "next/font/local"

const alQalamFont = localFont({
  src: "./al_qalam/alqalam.ttf",
})

const meQuranFont = localFont({
  src: "./me_quran/me_quran-2.woff2",
})

const nastaleeqFont = localFont({
  src: "./nastaleeq/indopak/indopak-nastaleeq-waqf-lazim-v4.2.1.woff",
})

const uthmanicFont = localFont({
  src: "./uthmanic_hafs/UthmanicHafs1Ver18.woff2",
})


// export const alQalamClassName = alQalamFont.className
// export const meQuranClassName = meQuranFont.className
// export const nastaleeqClassName = nastaleeqFont.className
// export const uthmanicClassName = uthmanicFont.className

const ArabicFontsClassNames = {
  alQalam: alQalamFont.className,
  meQuran: meQuranFont.className,
  nastaleeq: nastaleeqFont.className,
  uthmanic: uthmanicFont.className,
}

const arabicFontStyle = classNames.bind(ArabicFontsClassNames)

export default arabicFontStyle