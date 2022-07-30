import ChapterCardSkeleton from './Card/ChapterCardSkeleton'
import ChaptersView from './ChaptersView'
import JuzsView from './JuzsView'



const Chapters = ({className, chapterLists, isLoading, view}) => {

   
    return (
        <>
            <div className='grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2'>
                {
                    isLoading ?
                        new Array(3).fill().map((e, index) => (
                            <ChapterCardSkeleton key={index}/> 
                        ))
                        :
                        (view === 'chapter') ? 
                            <ChaptersView chapterData={chapterLists}/> :
                            <JuzsView chapterData={chapterLists}/>
                }
            </div>
        </>
    )
}

export default Chapters
