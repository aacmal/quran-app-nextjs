import classNames from 'classnames'
import React, { useContext } from 'react'
import PlaybackOption from './PlaybackOption'
import { RewindIcon, PlayIcon, PauseIcon, RepeatIcon } from '../../icons'
import useSurah from '../../../store/surahStore'


export const ButtonSmall = ({className, onClick, children}) => (
    <button onClick={onClick} className={classNames('hover:bg-emerald-300/50 cursor-pointer p-1 rounded text-slate-600 dark:text-slate-100', className)}>
        {children}
    </button>
)

const PlaybackController = ({ state, dispatch, reset }) => {
	const { audioId, setAudioId } = useSurah((state) => ({
        audioId: state.audioId,
        setAudioId: state.setAudioId,
    }))

    function goToPrevSurah(){
        if(audioId > 1){
            setAudioId(audioId - 1)
        } else {
            setAudioId(114)
        }
    }

    function goToNextSurah(){
        if(audioId < 114){
            setAudioId(audioId + 1)
        } else {
            setAudioId(1)
        }
    }

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='flex w-[16rem] justify-around relative'>
                    <ButtonSmall onClick={() => dispatch({type: 'repeat'})} className="">
                        <RepeatIcon className={classNames("h-6", {"text-emerald-500": state.isRepeat})}/>
                    </ButtonSmall>
                    <ButtonSmall 
                        onClick={goToPrevSurah}
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
                        onClick={goToNextSurah}
                        className='transform rotate-180'
                    >
                        <RewindIcon className="h-6" />
                    </ButtonSmall>
                    <PlaybackOption
                        onClickReset={() => reset()}
                    />
                </div>
            </div>
        </>
    )
}

export default PlaybackController