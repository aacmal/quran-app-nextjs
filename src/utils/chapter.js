import { makeUrl } from "./api"

export const getAllChaptersData = async (lang = 'id') => {
    const response = await fetch(makeUrl(`/chapters`, `language=${lang}`))
    const data = await response.json()
    return data
}

export const getChapterInfo = async (chapterId, lang = 'id') => {
    const response = await fetch(makeUrl(`/chapters/${chapterId}/info`, `language=${lang}`))
    const data = await response.json()
    return data
}

export const getChapter = async (chapterId, lang = 'id') => {
    const response = await fetch(makeUrl(`/chapters/${chapterId}`, `language=${lang}`))
    const data = await response.json()
    return data.chapter
}

export const getLocalChapter = (lang = 'id') => {
    return new Promise((resolve) => {
        import(`../../data/chapter/${lang}.json`).then((data) => {
            const array = Object.keys(data.default).map((key) => ({
                id: key,
                verses_count: data.default[key].versesCount,
                name_simple: data.default[key].transliteratedName,
                revelation_place: data.default[key].revelationPlace,
                verses_count: data.default[key].versesCount,
            }))
            resolve(array)
        })
    })
}