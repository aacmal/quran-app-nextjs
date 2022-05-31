import Image from 'next/image'
import History from '../icons/history';

const Banner = () => {
  return (
        <div className='rounded-2xl p-4 w-full bg-gradient-to-tr overflow-hidden from-emerald-300 to-emerald-700 relative'>
            <div className='flex flex-col h-24 justify-between w-full text-gray-50'>
                <span className='flex text-sm'><History className="h-5 w-5 mr-2"/> Terakhir dibaca</span>
                <div className=''>
                    <h2 className='text-xl font-bold'>Al - Fatiha</h2>
                    <p className='text-xs'>Surah No. 1</p>
                </div>
                <span className='text-xs'>Klik untuk melanjutkan</span>
            </div>
            <img
                src='/quran.png'
                className="h-32 absolute right-0 top-0 opacity-50"
            />
        </div>
  )
}

export default Banner;