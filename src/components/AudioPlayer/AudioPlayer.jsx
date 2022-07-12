import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { RootContext } from '../../context/RootContext';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import Wrapper from '../Wrapper'

const AudioPlayer = () => {
	// Context
	const { audioData } = useContext(RootContext)

	// Refs
	const audioRef = useRef()
	const intervalRef = useRef()

	// Control State
	const [value, setValue] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

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
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval(() => {
			setCurrentTime(calculateTime(Math.floor(audioRef.current.currentTime)+1))
			setTrackProgress(Math.floor(audioRef.current.currentTime)+1)
		}, [1000])
	}	

	useEffect(() => {
		console.log(audioRef.current.duration);
		setMaxtime(audioRef.current.duration)
	}, [])

	useEffect(() => {
		if(isPlaying){
			audioRef.current.play()
			startTimer()
			console.log(isPlaying);
		} else {
			clearInterval(intervalRef.current)
			audioRef.current.pause()
		}
	}, [isPlaying])

	function handleOnLoad(value){
		setTrackProgress(0)
		updateCurrentTime(0)
		setIsPlaying(false)
		setMaxtime(value)
		console.log(maxTime);
	}

	function handleUpdate(){
		audioRef.current.currentTime = value
	}

	return (
		<div className='fixed bottom-0 py-2 dark:bg-slate-600 bg-white shadow-lg shadow-black w-full'>
			<Wrapper className="py-0 pt-0 m-0">
				<audio 
					style={{display: 'none'}} 
					onLoadedMetadata={(e) => handleOnLoad(e.target.duration)} 
					ref={audioRef} 
					src={`https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${audioData}.mp3`} 
					preload='metadata' 
					loop={true}
				/>

				<div className='flex'>
					<PlayIcon onClick={() => setIsPlaying(!isPlaying)} className="h-10 cursor-pointer"/>
					{/* <PauseIcon className="h-10 bg-blue-400"/> */}
					<div className='flex justify-around w-full items-center px-3'>
						<span>{currentTime}</span>
						<input
						 	type="range" 
							className='w-[90%]'
							onChange={(e) => updateCurrentTime(e.target.value)}
							max={maxTime}
							value={trackProgress}
							onPointerUp={handleUpdate}
						/>
						<span>{calculateTime(maxTime)}</span>
					</div>
				</div>

			</Wrapper>
		</div>
	)
}

export default AudioPlayer