import { useState, useEffect } from 'react'
import Switch from '../Switch'
import ChapterCard from './ChapterCard'

const Chapter = ({className, chapterLists, isLoading}) => {

   
    return (
        <>
            <Switch/>
            <div className='grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2'>
                {
                    isLoading ?
                    <div>Loading</div>:
                    chapterLists.chapters.map(e => {
                        return (
                            <ChapterCard
                                key={e.id}
                                chapterId={e.id}
                                name_simple={e.name_simple}
                                translated_name={e.translated_name.name}
                                name_arabic={e.name_arabic}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Chapter
