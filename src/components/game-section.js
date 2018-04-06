import React from 'react';
import GameForm from './game-form'
import GameFeedback from './game-feedback'

export default function GameSection(props) {
    const {guessCount, feedback} = props
    return (
        <section>
            <GameForm onMakeGuess={guess => props.onMakeGuess(guess)} />   
            <GameFeedback feedback={feedback} guessCount={guessCount}/>   
        </section>
    );
}
