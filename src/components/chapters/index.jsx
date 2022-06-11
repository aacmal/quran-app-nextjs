import ChaptersView from './ChaptersView'
import JuzsView from './JuzsView'



const Chapter = ({className, chapterLists, isLoading, view}) => {

   
    return (
        <>
            <div className='grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2'>
                {
                    isLoading ?
                        <div>Loading</div> :
                        (view === 'chapter') ? 
                            <ChaptersView chapterData={chapterLists}/> :
                            <JuzsView chapterData={chapterLists}/>
                }
            </div>
        </>
    )
}

export default Chapter
