import React from 'react';
// import ReactDOM from 'react-dom';
import './game-board.css';

// import GameForm from './game-form';
import GameSection from './game-section';
import GameHeader from './game-header';
import GameStatus from './game-status';


export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100 + 1)
        }
    }

makeGuess(guess) {
    const difference = Math.abs(this.state.correctAnswer - guess)

    let feedback    

    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
      
    this.setState({
        feedback,
        guesses: [...this.state.guesses, guess]
    })
}

    render() {
        const { feedback, guesses } = this.state;
        const guessCount = guesses.length;
        return (
            <div>
                <GameHeader />
            <main role="main">
                <GameSection 
                    feedback={feedback}
                    guessCount={guessCount}
                    onMakeGuess={guess => this.makeGuess(guess)}/>
                <GameStatus 
                    guesses={guesses}/>
            </main>
            </div>
        )
    }
}