export const getSingleTafsir = async (verseKey) => {
    //for now the API provider does not support Indonesian, and will only display English
    const response = await fetch(`https://api.qurancdn.com/api/qdc/tafsirs/en-tafisr-ibn-kathir/by_ayah/${verseKey}?locale=en&mushaf=7`) 
    const data = await response.json()
    return data
}