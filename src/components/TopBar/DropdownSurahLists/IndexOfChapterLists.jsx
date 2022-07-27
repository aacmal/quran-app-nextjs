import classNames from 'classnames'
import { useCallback } from 'react'

const IndexOfChapterLists = ({chapterLists, chapterId}) => {

    const scrollToSpecificVerse = useCallback((verseKey) => {
        const verseYLocation = document.querySelector(`[data-verse="${verseKey}"]`).offsetTop
        window.scrollTo(0, verseYLocation-80)
    })

    return (
        <ul className={classNames("p-2 border-l border-emerald-300 w-16 h-72 overflow-auto scrollbar-hide")}>
        {
            new Array(parseInt(chapterLists[chapterId].verses_count)).fill(0).map((key, index) => (
                <li onClick={() => scrollToSpecificVerse(`${chapterId+1}:${index+1}`)} className="p-1 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-400 dark:hover:text-slate-100 hover:text-emerald-500 rounded flex items-center">
                    {index+1}
                </li>
            ))
        }
        </ul>
    )
}

export default IndexOfChapterLists