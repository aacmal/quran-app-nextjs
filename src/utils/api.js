const API_HOST = 'https://api.quran.com'

const API_ROOT_PATH = '/api/v4'

export const makeUrl = (path, parameters) => {
    if(!parameters){
        return `${API_HOST}${API_ROOT_PATH}${path}`
    }

    const queryParams = `?${parameters}`

    return `${API_HOST}${API_ROOT_PATH}${path}${queryParams}`
}
