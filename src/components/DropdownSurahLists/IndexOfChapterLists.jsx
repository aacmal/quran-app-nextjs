import classNames from 'classnames'
import Link from 'next/link'

const IndexOfChapterLists = ({chapterLists, chapterId}) => {
  return (
    <ul className={classNames("p-2 border-l border-emerald-300 w-16 h-72 overflow-auto scrollbar-hide")}>
    {
        new Array(parseInt(chapterLists[parseInt(chapterId)-1].verses_count)).fill(0).map((key, index) => (
            <Link key={index} href={`#${index+1}`}>
                <a>
                    <li className="p-1 cursor-pointer hover:bg-emerald-100 hover:text-emerald-500 rounded flex items-center">
                        {index+1}
                    </li>
                </a>
            </Link>
        ))
    }
    </ul>
  )
}

export default IndexOfChapterLists