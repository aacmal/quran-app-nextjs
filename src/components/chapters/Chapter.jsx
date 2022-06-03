import { useState, useEffect } from 'react'
import Switch from '../Switch'
import ChapterCard from './ChapterCard'

const Chapter = ({className}) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.quran.com/api/v4/chapters?language=id')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            console.log(data);
            setLoading(false)
        })
    }, [])
    return (
        <>
            <Switch/>
            <div className='grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2'>
                {
                    isLoading ?
                    <div>Loading</div>:
                    data.chapters.map(e => {
                        return (
                            <ChapterCard
                                key={e.id}
                                id={e.id}
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
