import { createContext, useCallback, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getAllChaptersData } from "../utils/chapter";

export const  RootContext = createContext()

export default function RootContextProvider({children}){
    const [bookmarkData, setBookmarkData] = useLocalStorage('bookmarked-verse', [])
    const [chapterData, setChapterData] = useState({
        allChapters: {},
        initialLoading: true
    })

    const [currentChapter, setCurrentChapter] = useState(1)

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

    const initAllChapters = useCallback(
        function (chapters) {
            setChapterData((currentData) => {
                return {...currentData, allChapters: chapters, initialLoading: false}
            })
        }
    )

    function setCurrentChapterId(chapterId) {
        setCurrentChapter(parseInt(chapterId)-1)
    }


    return (
        <RootContext.Provider
            value={{
                bookmarkData,
                toggleBookmarkVerse,

                initAllChapters,
                setCurrentChapterId,

                currentChapter,
                allChapters: chapterData.allChapters,
                isLoading: chapterData.initialLoading
            }}
        >
            {children}
        </RootContext.Provider>
    )

}