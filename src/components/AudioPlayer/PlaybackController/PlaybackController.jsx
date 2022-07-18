import classNames from 'classnames'
import React, { useContext } from 'react'
import { RootContext } from '../../../context/RootContext'
import DotsIcon from '../../icons/DotsIcon'
import PauseIcon from '../../icons/PauseIcon'
import PlayIcon from '../../icons/PlayIcon'
import RepeatIcon from '../../icons/RepeatIcon'
import RewindIcon from '../../icons/RewindIcon'
import PlaybackOption from './PlaybackOption'


export const ButtonSmall = ({className, onClick, children}) => (
    <button onClick={onClick} className={classNames('hover:bg-emerald-300/50 cursor-pointer p-1 rounded text-slate-600 dark:text-slate-100', className)}>
        {children}
    </button>
)

const PlaybackController = ({ isPlay, setPlay, state, dispatch }) => {
	const { setAudioId } = useContext(RootContext)
    // console.log(state);

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='flex w-[16rem] justify-around relative'>
                    <ButtonSmall onClick={() => dispatch({type: 'repeat'})} className="">
                        <RepeatIcon className={classNames("h-6", {"text-emerald-500": state.isRepeat})}/>
                    </ButtonSmall>
                    <ButtonSmall 
                        onClick={() => setAudioId(current => current-1)}
                        className=""
                    >
                        <RewindIcon className="h-6" />
                    </ButtonSmall>
                    {
                        state.isPlaying ?
                            <ButtonSmall onClick={() => dispatch({type: 'pause'})}>
                                <PauseIcon className="h-6"/>
                            </ButtonSmall>:
                            <ButtonSmall>
                                <PlayIcon onClick={() => dispatch({type: 'play'})} className="h-6"/> 
                            </ButtonSmall>
                    }
                    <ButtonSmall 
                        onClick={() => setAudioId(current => current+1)}
                        className='transform rotate-180'
                    >
                        <RewindIcon className="h-6" />
                    </ButtonSmall>
                    <PlaybackOption/>
                </div>
            </div>
        </>
    )
}

export default PlaybackController