import React from 'react';
import './game-form.css';

export default class GameForm extends React.Component {
    

    onSubmit(event) {
        event.preventDefault();
        const value = this.input.value;
        this.input.value = '';
        this.input.focus();
        this.props.onMakeGuess(value);
        console.log(value);

    }
    render() {
        return (
                <form onSubmit={e => this.onSubmit(e)}>
                    <input 
                        type="number" 
                        name="userGuess" 
                        id="userGuess"
                        min="1"
                        max="100"
                        placeholder="Enter your guess..."
                        ref={input => (this.input = input)}
                        required
                        
                        />
                    <button 
                        type="submit"
                        name="submit"
                        id="guessButton"
                        className="button"
                    >
                    GUESS
                    </button>
                </form>

        )
    }
}