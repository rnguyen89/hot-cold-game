import React from 'react';

import './game-info.css';

export default function GameInfo(props) {
    return (
        <section id="#what">
            <h2>What do I do?</h2>
            <ol>
                <li>Enter a number from 1-100</li>
                <li>Cick Guess</li>
                <li>Try to guess the correct number</li>
            </ol>
        </section>
    )
};