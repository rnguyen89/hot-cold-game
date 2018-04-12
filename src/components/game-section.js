import React from 'react';
import GameForm from './game-form'
import GameFeedback from './game-feedback'

export default function GameSection(props) {

    return (
        <section>
            <GameForm  />   
            <GameFeedback />   
        </section>
    );
}
