import { makeUrl } from "./api"

export const getJuzs = async (lang = 'id') => {
  const response = await fetch(makeUrl(`/juzs`, `language=${lang}`))
  const data = await response.json()
  return data
}