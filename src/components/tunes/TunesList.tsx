import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import {Song} from '../../types'
import './TunesList.scss'

import TunesSong from './TunesSong'

interface Props {
    songs: Song[]
}

const TunesList: React.FC<Props> = props => {
    const {songs} = props
    return (
       <div>
            <TransitionGroup tag="ul" className="tunes-list">
                {songs.map(song => (
                    <CSSTransition key={song.id} timeout={200} classNames="song">
                        <li key={song.id}>
                            <TunesSong song={song} />
                        </li>
                        
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default TunesList
