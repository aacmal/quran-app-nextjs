import classNames from 'classnames';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { RootContext } from '../../context/RootContext';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import RewindIcon from '../icons/RewindIcon';

import style from './AudioPlayer.module.css'

const AudioPlayer = () => {
	// Context
	const { audioId, setAudioId, allChapters } = useContext(RootContext)

	// Refs
	const audioRef = useRef()
	const intervalRef = useRef()
	const sliderRef= useRef()

	// Control State
	const [value, setValue] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isOnSeek, setOnSeek] = useState(false)

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
		intervalRef.current = setInterval(() => {
			setCurrentTime(calculateTime(Math.floor(audioRef.current.currentTime)+1))
			setTrackProgress(Math.floor(audioRef.current.currentTime)+1)
			sliderRef.current.style.setProperty('--seek-before-width', `${(Math.floor(audioRef.current.currentTime)+1) / maxTime * 100}%`)
		}, [1000])
	}	

	useEffect(() => {
		if(isPlaying){
			audioRef.current.play()
			startTimer()
		} else {
			audioRef.current.pause()
		}
	}, [isPlaying])

	function handleOnLoad(value){
		clearInterval(intervalRef.current)
		setTrackProgress(0)
		updateCurrentTime(0)
		setMaxtime(Math.floor(value))
		setIsPlaying(false)
		sliderRef.current.style.setProperty('--seek-before-width', `0%`)
	}

	function handlePointerUp(){
		setOnSeek(false)
		audioRef.current.currentTime = value
	}

	return (
		<div className={classNames('fixed bottom-0 dark:bg-slate-600 bg-white shadow-lg w-full', {"hidden": audioId == null})}>
			<div className="py-3 max-w-screen-2xl mx-auto relative">
				<div className='absolute -top-6 left-2 bg-white dark:bg-slate-600 dark:text-slate-100 py-1 px-2 rounded text-emerald-500 font-bold text-sm md:text-base'>{audioId && allChapters[audioId-1].name_simple}</div>
				<audio 
					style={{display: 'none'}} 
					onLoadedMetadata={(e) => handleOnLoad(e.target.duration)} 
					ref={audioRef} 
					src={audioId && `https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${audioId}.mp3`} 
					preload='metadata' 
					loop={true}
				/>

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
					<div className='flex items-center justify-center'>
						<RewindIcon 
							onClick={() => setAudioId(current => current-1)}
							className="h-6 text-slate-600 dark:text-slate-100 mr-6 cursor-pointer"
						/>
						{
							isPlaying ?
								<PauseIcon onClick={() => setIsPlaying(false)} className="h-8 cursor-pointer text-slate-600 dark:text-slate-100"/>:
								<PlayIcon onClick={() => setIsPlaying(true)} className="h-8 cursor-pointer text-slate-600 dark:text-slate-100"/> 
						}
						<RewindIcon 
							onClick={() => setAudioId(current => current+1)}
							className="h-6 transform rotate-180 text-slate-600 dark:text-slate-100 ml-6 cursor-pointer"
						/>
					</div>
				</div>

			</div>
		</div>
	)

}

export default AudioPlayer