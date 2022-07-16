import React, { useContext } from 'react'
import { RootContext } from '../../../context/RootContext'
import DotsIcon from '../../icons/DotsIcon'
import PauseIcon from '../../icons/PauseIcon'
import PlayIcon from '../../icons/PlayIcon'
import RewindIcon from '../../icons/RewindIcon'

const AudioController = ({ isPlay, setPlay }) => {
	const { setAudioId } = useContext(RootContext)


    return (
        <>
            <div className='flex items-center justify-center relative'>
                <RewindIcon
                    onClick={() => setAudioId(current => current-1)}
                    className="h-6 text-slate-600 dark:text-slate-100 mr-5 md:mr-6 cursor-pointer"
                />
                {
                    isPlay ?
                        <PauseIcon onClick={() => setPlay(false)} className="h-8 cursor-pointer text-slate-600 dark:text-slate-100"/>:
                        <PlayIcon onClick={() => setPlay(true)} className="h-8 cursor-pointer text-slate-600 dark:text-slate-100"/> 
                }
                <RewindIcon 
                    onClick={() => setAudioId(current => current+1)}
                    className="h-6 transform rotate-180 text-slate-600 dark:text-slate-100 ml-5 md:ml-6 cursor-pointer"
                />
                <button className="p-1 cursor-pointer rounded transform rotate-90 absolute top-1/2 -translate-y-1/2 translate-x-[6rem] md:translate-x-[6.5rem] hover:bg-emerald-300/50">
                    <DotsIcon  className="h-6"/>
                </button>
            </div>
        </>
    )
}

export default AudioController