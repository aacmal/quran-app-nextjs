import React, { useContext } from 'react'
import BookmarkedItem from './BookmarkedItem'
import { RootContext } from '../../context/RootContext'
import { Bookmark } from '../icons'

const BookmarkedVerseLists = ({chapterLists}) => {
    const {bookmarkData} = useContext(RootContext)


    if(bookmarkData.length > 0){
        return (
            <div className='px-5 xl:px-0 mb-5'>
                <div className='h-fit w-full bg-gradient-to-br from-emerald-300 to-emerald-600 rounded-lg p-4'>
                    <div className='mb-4 flex text-emerald-50'>
                        <Bookmark fill={true} className="h-6 mr-2"/>
                        <span className='font-bold'>Bookmarked</span>
                    </div>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            bookmarkData.map((e, index) => {
                                const chapterId = e.split(":")
                                return (
                                    <BookmarkedItem
                                        key={index}
                                        name_simple={chapterLists[chapterId[0]-1].name_simple}
                                        verse_key={e}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        
        )
    }
}

export default BookmarkedVerseLists