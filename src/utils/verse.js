import { makeUrl } from "./api"

export const getSpecificVerse = async (verseKey, lang='id') => {
    const response = await fetch(makeUrl(`/verses/by_key/${verseKey}`, `language=${lang}&fields=text_uthmani&translation_fields=language_id&translations=33`))
    const data = await response.json()
    return data
}