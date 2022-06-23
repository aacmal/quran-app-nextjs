import Star from '../icons/star'
import Bookmark from '../icons/bookmark'
import Copy from '../icons/copy'
import classNames from 'classnames'



const IconWrapper = ({children, className}) => (
    <div className={classNames('p-1 rounded hover:text-white hover:bg-emerald-200', className)}>
        {children}
    </div>
)


const Verses = ({verse_number, translations, text_uthmani, verse_key}) => {

    function copyToClipboard(text){
        navigator.clipboard.writeText(text)
    }

    const verseId = verse_key.split(':')

    return (
        <> 
            <div id={verseId[1]} className='flex justify-between py-3 md:flex-row flex-col'>
                <div className='flex md:flex-col flex-row items-center mb-4'>
                    <div className='relative grid place-items-center h-9 w-9 md:h-12 md:w-12'>
                        <span className='text-xs font-semibold md:text-lg'>{verse_number}</span>
                        <Star className="absolute h-8 w-8 md:h-12 md:w-12 left-0"/>
                    </div>
                    <div className='md:mt-3 md:ml-0 ml-2  flex md:flex-col flex-row items-center justify-between md:h-32 w-full md:w-fit'>
                        <div className='flex md:flex-col'>
                            <IconWrapper className="">
                                <Bookmark className="md:h-6 h-5  text-gray-500 md:mb-2 md:mr-0 mr-2"/>
                            </IconWrapper>
                            <IconWrapper>
                                <Copy onClick={() => copyToClipboard(text_uthmani)} className="md:h-6 h-5 text-gray-500 active:text-emerald-500 cursor-pointer"/>
                            </IconWrapper>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[95%] flex flex-col '>
                    <p id='arab' className='font-serif text-right inline-block text-3xl md:text-4xl lg:text-5xl transition-all lg:leading-loose md:leading-loose leading-relaxed'>{text_uthmani}</p>
                    <p dangerouslySetInnerHTML={{__html:translations[0].text}} className=' text-base md:text-xl transition-all mt-5 inline-block'></p>
                </div>
            </div>
            <hr  className='border-none my-3 lg:my-5 h-[1px] bg-emerald-500'/>
        </>

    )
}

export default Verses