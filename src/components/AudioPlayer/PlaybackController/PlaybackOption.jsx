import classNames from 'classnames'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { ButtonSmall } from './PlaybackController'
import { XIcon, ListsIcon, DownloadIcon, DotsIcon, ChevronIcon } from '../../icons'
import { getAllRecitations } from '../../../utils/audio'
import { AudioContext } from '../AudioPlayer'
import useSurah from '../../../store/surahStore'
import { shallow } from 'zustand/shallow'

const PlaybackOption = ({onClickReset}) => {
    const { audioId, setAudioId } = useSurah((state) => ({
        audioId: state.audioId,
        setAudioId: state.setAudioId,
    }), shallow)
    const { audioState, dispatch } = useContext(AudioContext)

    const [isHidden, setHidden] = useState(true)
    const [location, setLocation] = useState('main')
    const [recitations, setRecitations] = useState([])
    
    useEffect(() => {
        getAllRecitations()
        .then(res => {
            setRecitations(res.recitations)
        })
    }, [])

    return (
        <div>
            <ButtonSmall onClick={() => setHidden(!isHidden)} className="relative">
                <DotsIcon  className="h-6 transform rotate-90"/>
            </ButtonSmall>
                    <div className={
                        classNames(
                            'p-2 dark:bg-slate-500 bg-white dark:text-slate-100 shadow-lg rounded-md w-52 absolute bottom-14 right-0 translate-x-9 transform transition-all',
                            {"opacity-0 invisible translate-y-7": isHidden},
                            {"opacity-100 visible translate-y-0": !isHidden},
                            {"max-h-44": location === 'main'},
                            {"max-h-72 w-72 overflow-auto": location === 'recitations'}
                            )}>
                    {
                        location === 'main'
                        ? <>
                            <div className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer' onClick={() => setLocation('recitations')}>
                                <ListsIcon className="h-5 mr-2"/>
                                <div className='flex w-full justify-between items-center'>
                                    <span>Pilih Qari</span>
                                    <ChevronIcon className="h-5 transform -rotate-90"/>
                                </div>
                            </div>
                            <Link download={true} target="_blank" href={`https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${audioId}.mp3`}>
                                    <div className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer'>
                                        <DownloadIcon className="h-5 mr-2"/>
                                        <span>Unduh file Audio</span>
                                    </div>
                            </Link>
                            <div  
                                className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer'
                                onClick={onClickReset}
                            >
                                <XIcon className="h-5 mr-2"/>
                                <span>Tutup Pemutar Audio</span>
                            </div>  
                        </>
                        : <>
                            <div className='py-1 px-1 hover:bg-emerald-500 flex items-center rounded cursor-pointer' onClick={() => setLocation('main')}>
                                <ChevronIcon className="h-5 transform rotate-90 mr-3"/>
                                <span>Kembali</span>
                            </div>
                            {
                                recitations.map(e => 
                                    <div key={e.id}>
                                        <div 
                                            className={classNames(
                                                'py-1 px-1 my-1 hover:bg-emerald-500 rounded cursor-pointer',
                                                {"bg-emerald-500": e.id === audioState.reciterId}
                                            )}
                                            onClick={() => dispatch({type: 'changeReciterId', payload: e.id})}
                                        
                                        >
                                            {e.reciter_name}{"  "}{e.style && <span className='italic font-thin'>({e.style})</span>}
                                        </div>
                                        <hr className='w-full opacity-40'/>
                                    </div>
                                )
                            }                        
                        </>
                        

                    }
                    </div>
        </div>
    )
}

export default PlaybackOption