import  ChapterCard from './ChapterCard'

const JuzCard = ({juz_number, verse_mapping}) => {
  return (
    <div className="p-3 bg-red-500 gap-3 grid rounded-xl">
        <span>Juz {juz_number}</span>
        {
            Object.keys(verse_mapping).map((e) => (
                <ChapterCard
                
                />
            ))
        }
    </div>
  )
}

export default JuzCard