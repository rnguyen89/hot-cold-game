import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
    let guesses;
    if(props.guesses) {
         guesses = props.guesses.map((guess, index) => {
            return (
            <li key={index}>
              {guess}
            </li>
            )
        });
    }
  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}