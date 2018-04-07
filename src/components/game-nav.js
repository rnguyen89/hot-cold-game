import React from 'react';

import './game-nav.css';

export default function GameNav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#what"
                    className="what"
                    >
                    What?
                    </a>
                </li>
                <li>
                    <a href="feedback"
                    className="new"
                    onClick={() => props.onRestartGame()}
                    >
                    + New Game
                    </a>
                </li>
            </ul>
        </nav>
    )
}