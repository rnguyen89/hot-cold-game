import React from 'react';
import './game-header.css'

import GameNav from './game-nav'

export default function GameHeader(props) {
    return (
        <header className="heading">
        <GameNav />
            <h1>Hot or Cold Game</h1>
        </header>
    )
}