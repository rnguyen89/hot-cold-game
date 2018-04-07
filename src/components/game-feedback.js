import React from 'react';
import './game-feedback.css'

export default function GameFeedback(props) {
    const key = props.guessCount;
    let guessAgain;
    if(key !== 0) {
        guessAgain = <span>Guess Again!</span>;
        console.log(key)
    }
    return (
        <h2
            key={key}
            id="feedback"
            role="status"
            
        >
            {props.feedback} {guessAgain} 
        </h2>
    );
}