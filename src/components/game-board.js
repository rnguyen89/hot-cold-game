import React from 'react';
import './game-board.css';

import GameSection from './game-section';
import GameHeader from './game-header';
import GameStatus from './game-status';
import GameInfo from './game-info';


export default function GameBoard(props) {

    return (
        <div>
            <GameHeader />
            <main role="main">
                <GameSection />
                <GameStatus />
                <GameInfo />
            </main>
        </div>
    )
}