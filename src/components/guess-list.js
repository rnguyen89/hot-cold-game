import React from 'react';
import { connect } from 'react-redux';

import './guess-list.css';

export function GuessList(props) {
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

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);
