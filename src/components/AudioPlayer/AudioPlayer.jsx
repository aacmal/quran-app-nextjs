import classNames from 'classnames';
import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { RootContext } from '../../context/RootContext';
import PlaybackController from './PlaybackController/PlaybackController';

import style from './AudioPlayer.module.css'

const initialState = {
	isPlaying: false,
	isRepeat: false
}

function reducer(state, action){
	switch (action.type){
		case 'play':
			return {...state, isPlaying: true}
		case 'pause':
			return { ...state, isPlaying: false}
		case 'repeat':
			return {  ...state, isRepeat: !state.isRepeat}
		default:
			throw new Error("dispatch not found")
	}
}

const AudioPlayer = () => {
	// Context
	const { audioId, setAudioId, allChapters } = useContext(RootContext)
	
	// Refs
	const audioRef = useRef()
	const sliderRef= useRef()

	// Playback Control
	const [playbackState, dispatch] = useReducer(reducer, initialState)

	// Control State
	const [value, setValue] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isOnSeek, setOnSeek] = useState(false)
	const isHidden = audioId == null

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
		if(!playbackState.isRepeat){
			if(audioId < 114){
				setAudioId(current => current+1)
			} else {
				setAudioId(1)
			}
		}
	}
	
	function reset(){
		dispatch({type: 'pause'})
		setAudioId(null)
		setTrackProgress(0)
		updateCurrentTime(0)
	}

	useEffect(() => {
		if(playbackState.isPlaying){
			audioRef.current.play()
			startTimer()	
		} else {
			audioRef.current.pause()
		}
	}, [playbackState.isPlaying])

	useEffect(() => {
		setTimeout(() => {
			dispatch({type: 'play'})
		}, 500)
	}, [maxTime])
	
	return (
		<>
			<audio 
				style={{display: 'none'}} 
				onLoadedMetadata={(e) => handleOnLoad(e.target.duration)} 
				ref={audioRef} 
				src={audioId && `https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${audioId}.mp3`} 
				loop={playbackState.isRepeat}
				preload='metadata' 
				onEnded={handleOnEnded}
				onTimeUpdate={startTimer}
			/>
			{
				!isHidden &&  
				<div className={classNames('fixed bottom-0 dark:bg-slate-600 bg-white border-t border-emerald-500 lg:shadow-2xl shadow-gray-500/50 w-full ', {"hidden": audioId == null})}>
					<div className="py-3 max-w-screen-2xl mx-auto relative">
						<div className='absolute -top-6 left-2 border border-emerald-500 bg-white dark:bg-slate-600 dark:text-slate-100 py-1 px-2 rounded text-emerald-500 font-bold text-sm md:text-base'>{audioId && allChapters[audioId-1].name_simple}</div>
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
								state={playbackState}
								dispatch={dispatch}
								reset={reset}
							/>
						</div>

					</div>
				</div>
			}
		
		</>
	)

}

export default AudioPlayer