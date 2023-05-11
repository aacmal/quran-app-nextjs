import classNames from 'classnames'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import BookmarkedVerseLists from '../src/components/BookmarkedVerseLists/BookmarkedVerseLists'
import Chapters from '../src/components/chapters'
import Header from '../src/components/Header'
import Switch from '../src/components/Switch'
import TransitionWrapper from '../src/components/TransitionWrapper/TransitionWrapper'
import Wrapper from '../src/components/Wrapper'
import { RootContext } from '../src/context/RootContext'
import { TopbarContext } from '../src/context/TopbarContext'

export default function Home() {
	const { allChapters, isLoading } = useContext(RootContext)

	const { setShowTopbar } = useContext(TopbarContext)

	const [view, setView] = useState('chapter')
	
	useEffect(() => {
		setShowTopbar(false)
		document.body.classList.add('white')

		return () => document.body.classList.remove('white')
	}, [])

	return (
		<TransitionWrapper withOpactity={true} type='toLeft'>
			<Wrapper>
				<Head>
					<title>Quran App</title>
				</Head>
				<Header className="mb-3">Quran App</Header>
				{
					!isLoading && 
					<BookmarkedVerseLists chapterLists={allChapters}/>
				}
				{/* <HomeBanner/> */}
				<div className={classNames(' px-5 py-5 lg:p-12 lg:pb-32 pb-32 bg-gray-100 dark:bg-slate-700 min-h-screen rounded-t-2xl ')}>
					<Switch setView={setView} view={view}/>
					<Chapters isLoading={isLoading} chapterLists={allChapters} view={view}/>
				</div>
			</Wrapper> 
		</TransitionWrapper>
	)
}
