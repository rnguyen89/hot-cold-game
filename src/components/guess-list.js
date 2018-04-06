import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
    console.log(props.data);
    if(this.props.guesses) {
    const guesses = this.props.guesses.map((guess, index) => {
        return (
        <li key={index}>
          {guess}
        </li>
        )
    });
}
    return (
        <ul id="guessList">
            {guesses}
        </ul>
    )
}