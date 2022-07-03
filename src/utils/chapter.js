import { makeUrl } from "./api"

export const getAllChaptersData = async (lang='id') => {
    const response = await fetch(makeUrl(`/chapters`, `language=${lang}`))
    const data = await response.json()
    return data
}