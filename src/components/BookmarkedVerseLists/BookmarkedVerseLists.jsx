import React, { useCallback, useContext } from 'react'
import BookmarkedItem from './BookmarkedItem'
import { RootContext } from '../../context/RootContext'
import { Bookmark } from '../icons'
import IconWrapper from '../icons/IconWrapper'
import TrashIcon from '../icons/TrashIcon'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const BookmarkedVerseLists = ({chapterLists}) => {
    const { bookmarkData, deleteBookmark} = useContext(RootContext)

    if(bookmarkData.length > 0){
        return (
            <div className='px-5 xl:px-0 mb-5'>
                <div className='h-fit w-full bg-gradient-to-br from-emerald-300 to-emerald-600 rounded-lg lg:p-4 p-3'>
                    <div className='lg:mb-4 mb-2 flex justify-between items-center text-white'>
                        <div className='flex'>
                            <Bookmark fill={true} className="h-6 mr-2"/>
                            <span className='font-bold'>Bookmark</span>
                        </div>
                        <IconWrapper onHover="none" onClick={() => deleteBookmark(false)}>
                            <TrashIcon className="h-6 text-white"/>
                        </IconWrapper>
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