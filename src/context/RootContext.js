import { createContext, useCallback, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getAllChaptersData } from "../utils/chapter";

export const  RootContext = createContext()

export default function RootContextProvider({children}){
    const [bookmarkData, setBookmarkData] = useLocalStorage('bookmark', [])
    const [chapterData, setChapterData] = useState({
        allChapters: {},
        initialLoading: true
    })

    const [currentChapter, setCurrentChapter] = useState(1)

    // if the verse data is not in the list of markers, then add it, if there is then delete it
    function deleteBookmark(verseKey){
        if(verseKey){
            setBookmarkData((currentData) => {
                for (let i = currentData.length-1; i>=0; i--) {
                    if (currentData[i] === verseKey) {
                        currentData.splice(i, 1);
                        break;       
                    }
                }
                return [...currentData]
            })
        } else {
            setBookmarkData(() => {
                return []
            })
        }

    }

    function addBookmark(verseKey){
        setBookmarkData((currentData) => {
            return [verseKey, ...currentData]
        })
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

    console.log(bookmarkData);

    return (
        <RootContext.Provider
            value={{
                bookmarkData,
                addBookmark,
                deleteBookmark,

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