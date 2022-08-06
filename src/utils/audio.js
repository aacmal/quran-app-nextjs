import { makeUrl } from "./api"

export const getAllRecitations = async (lang='en') => {
    const response = await fetch(makeUrl(`/resources/recitations`, `language=${lang}`))
    const data = await response.json()
    return data
}

export const getAudioFile = async (reciterId, chapterNumber) => {
    const response = await fetch(makeUrl(`/chapter_recitations/${reciterId}/${chapterNumber}`, 'segments=true'))
    const data = await response.json()
    return data
}