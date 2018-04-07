import React from 'react';
import GuessCount from './guess-count';
import GuessList from './guess-list';


export default function GameStatus(props) {
    const guesses = props.guesses;    
    const guessCount = props.guesses.length;
    return (
        <section>
            <GuessCount guessCount={guessCount}/>
            <GuessList guesses={guesses}/>            
        </section>
    )
}