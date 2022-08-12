import classNames from 'classnames';
import React, { createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from 'react'
import { RootContext } from '../../context/RootContext';
import PlaybackController from './PlaybackController/PlaybackController';

import style from './AudioPlayer.module.css'
import { useRouter } from 'next/router';
import { StyleContext } from '../../context/StyleContext';
import { getAudioFile } from '../../utils/audio';



// Context
export const AudioContext = createContext()

// Reducer
const initialState = {
	isPlaying: false,
	isRepeat: false,
	reciterId: 7
}

function reducer(state, action){
	switch (action.type){
		case 'play':
			return {...state, isPlaying: true}
		case 'pause':
			return { ...state, isPlaying: false}
		case 'repeat':
			return {  ...state, isRepeat: !state.isRepeat}
		case 'changeReciterId':
			return { ...state, reciterId: action.payload }
		default:
			throw new Error("dispatch not found")
	}
}

const AudioPlayer = () => {
	const router = useRouter()

	// Context
	const { audioId, setAudioId, allChapters, currentChapter, highlightedVerse, setHighlightedVerse } = useContext(RootContext)
	const { autoScroll } = useContext(StyleContext)
	
	// Refs
	const audioRef = useRef()
	const sliderRef= useRef()

	// Playback Control
	const [audioState, dispatch] = useReducer(reducer, initialState)

	// Control State
	const [value, setValue] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isOnSeek, setOnSeek] = useState(false)
	const isHidden = audioId == null

	// Audio Data
	const [audioData, setAudioData] = useState(null)

	// Time State
	const [maxTime, setMaxtime] = useState(0)
	const [currentTime, setCurrentTime] = useState('0:0')

	function calculateTime(secs){
		const minutes = Math.floor(secs / 60)
		const seconds = Math.floor(secs % 60)
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  		return `${minutes}:${returnedSeconds}`;
	}

	function updateCurrentTime(value){
		setTrackProgress(Math.floor(value))
		setCurrentTime(calculateTime(value))
		setValue(value)
	}

	function startTimer(){
		setCurrentTime(calculateTime(Math.floor(audioRef.current.currentTime)+1))
		setTrackProgress(Math.floor(audioRef.current.currentTime)+1)
		sliderRef?.current?.style.setProperty('--seek-before-width', `${(Math.floor(audioRef.current.currentTime)+1) / maxTime * 100}%`)
		
		// handle highligthing verse
		if(audioData){
			const activeVerse = audioData.timestamps.find((verse) => 
				// convert from milliseconds to seconds by dividing by 1000
				audioRef.current.currentTime < Number(verse.timestamp_to / 1000)
			)
			setHighlightedVerse(activeVerse?.verse_key);
		}
	}	
	
	function handleOnLoad(value){
		setTrackProgress(0)
		updateCurrentTime(0)
		setMaxtime(Math.floor(value))
		dispatch({type: 'pause'})
		// setPlaying(false)
		sliderRef?.current?.style.setProperty('--seek-before-width', `0%`)
	}
	
	function handlePointerUp(){
		setOnSeek(false)
		audioRef.current.currentTime = value
	}
	
	function handleOnEnded(){
		// If no repeat, change to next surah
		if(!audioState.isRepeat){
			if(audioId < 114){
				setAudioId(current => current+1)
			} else {
				setAudioId(1)
			}
		}
	}

	function handleOnCanPlayThrough(e){
		if(e.eventPhase > 1){
			dispatch({type: 'play'})
		}
	}
	
	function reset(){
		dispatch({type: 'pause'})
		setAudioId(null)
		setTrackProgress(0)
		updateCurrentTime(0)
		setTimeout(() => {
			setHighlightedVerse(null)
		}, 200)
	}

	useEffect(() => {
		if(audioState.isPlaying){
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
	}, [audioState.isPlaying])

	useEffect(() => {
		if(audioId){
			getAudioFile(audioState.reciterId, audioId)
			.then((res) => setAudioData(res.audio_file))
			.then(dispatch({type: 'pause'}))
		}

	}, [audioId, audioState.reciterId])

	useEffect(() => {
		const highlightedElement = document.querySelector(`[data-verse="${highlightedVerse}"]`)
		const verseYLocation = highlightedElement?.offsetTop
		// Current chapter is index of allchapters
		if(currentChapter+1 === audioId && autoScroll && (router.pathname === "/surah/[chapter]")){
			window.scrollTo(0, verseYLocation-200)
		}

	}, [highlightedVerse])

	
	return (
		<AudioContext.Provider
			value={{
				audioState,
				dispatch
			}}
		>
			<audio 
				style={{display: 'none'}} 
				onLoadedMetadata={(e) => handleOnLoad(e.target.duration)} 
				ref={audioRef} 
				src={audioData && audioData.audio_url} 
				loop={audioState.isRepeat}
				preload='metadata' 
				onEnded={handleOnEnded}
				onCanPlayThrough={e => handleOnCanPlayThrough(e)}
				onTimeUpdate={startTimer}
			/>
			{
				!isHidden &&  
				<div className={classNames('fixed bottom-0 dark:bg-slate-600 bg-white border-t border-emerald-500 lg:shadow-2xl shadow-gray-500/50 w-full ', {"hidden": audioId == null})}>
					<div className="py-3 max-w-screen-2xl mx-auto relative">
						<div onClick={() => router.push(`/surah/${audioId}`, undefined, {scroll: false})} className='cursor-pointer absolute -top-6 left-2 border border-emerald-500 bg-white dark:bg-slate-600 dark:text-slate-100 py-1 px-2 rounded text-emerald-500 font-bold text-sm md:text-base'>{audioId && allChapters[audioId-1].name_simple}</div>
						<div className='flex flex-col'>
							{/* <PauseIcon className="h-10 bg-blue-400"/> */}
							<div className='flex justify-between w-full items-center px-3'>
								<span className='dark:text-slate-100 md:text-base text-sm'>{currentTime}</span>
								<input
									ref={sliderRef}
									type="range" 
									className={classNames(style.audioSlider, 'w-[75%] md:w-[90%]')}
									onChange={(e) => updateCurrentTime(e.target.value)}
									max={maxTime}
									value={isOnSeek ? null : trackProgress}
									onPointerUp={handlePointerUp}
									onPointerDown={() => setOnSeek(true)}
								/>
								<span className='dark:text-slate-100 md:text-base text-sm'>{calculateTime(maxTime)}</span>
							</div>
							<PlaybackController
								state={audioState}
								dispatch={dispatch}
								reset={reset}
							/>
						</div>

					</div>
				</div>
			}
		
		</AudioContext.Provider>
	)

}

export default AudioPlayer