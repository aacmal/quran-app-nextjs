import {useState, useEffect} from 'react'
import Star from './icons/star'

const Verses = () => {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.quran.com/api/v4/verses/by_chapter/2?language=id&fields=text_uthmani&translation_fields=resource_name,language_id&translations=33&per_page=220')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            console.log(data);
            setLoading(false)
        })
    }, [])
    console.log(data);
    return (
        <div className=''>
            {
                isLoading ? <div>Hello World</div>:
                data.verses.map(e => {
                    return (
                        <>
                            <div className='flex justify-between py-3 pr-1'>
                                <div className='relative grid place-items-center h-8 w-8'>
                                    <span className='text-xs font-semibold'>{e.verse_number}</span>
                                    <Star className="absolute h-8 w-8 left-0"/>
                                </div>
                                <span className='font-serif text-right block text-2xl w-72'>{e.text_uthmani}</span>
                            </div>
                            <span dangerouslySetInnerHTML={{__html:e.translations[0].text}} className='text-sm'></span>
                            <hr  className='my-3'/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Verses