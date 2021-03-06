import React from 'react';
import {connect} from 'react-redux';

import './game-feedback.css'

export function GameFeedback(props) {
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

const mapStateToProps = state => ({
    feedback: state.feedback,
    guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GameFeedback);