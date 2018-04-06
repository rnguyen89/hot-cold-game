import React from 'react';
import GuessCount from './guess-count';
import GuessList from './guess-list';


export default function GameStatus(props) {
    const guessCount = guesses.length;
    const guesses = props    
    return (
        <section>
            <GuessCount guessCount={guessCount}/>
            <GuessList guesses={guesses}/>            
        </section>
    )
}