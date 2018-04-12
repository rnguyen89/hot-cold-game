import React from 'react';
import {connect} from 'react-redux';

import {restartGame} from '../actions/actions';

import './game-nav.css';

export function GameNav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="feedback"
                    className="new"
                    onClick={() => 
                        props.dispatch(
                            restartGame(Math.floor(Math.random() * 100) + 1)
                        )}>
                    + New Game
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default connect()(GameNav);
