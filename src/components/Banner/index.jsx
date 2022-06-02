import Image from 'next/image'
import History from '../icons/history';
import Content from './Content';

const Banner = ({isInSurah, chapterData, isLoading}) => {
  return (
        <div className='rounded-2xl p-4 w-full bg-gradient-to-tr overflow-hidden from-emerald-300 to-emerald-700 relative'>
          {
            isLoading ? <span>Loading</span>:
            <Content isInSurah={isInSurah} chapterData={chapterData}/>
          }
            <img
                src='/quran.png'
                className={`h-32 absolute z-10 right-0 top-0 opacity-50 ${isInSurah && "transform scale-125 opacity-20"}`}
            />
        </div>
  )
}

export default Banner;