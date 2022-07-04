import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const  RootContext = createContext()

export default function RootContextProvider({children}){
    const [bookmarkData, setBookmarkData] = useLocalStorage('bookmarked-verse', [])

    // if the verse data is not in the list of markers, then add it, if there is then delete it
    function toggleBookmarkVerse(verseKey){
        if(bookmarkData.includes(verseKey)){
            setBookmarkData((currentData) => {
                const newData = currentData.splice(currentData.indexOf(verseKey), 1)
                return newData
            })
        } else {
            setBookmarkData((currentData) => {
                return [verseKey, ...currentData]
            })
        }
    }

    return (
        <RootContext.Provider
            value={{
                bookmarkData,
                toggleBookmarkVerse

            }}
        >
            {children}
        </RootContext.Provider>
    )

}