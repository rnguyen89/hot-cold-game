import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.css';

import GameBoard from './components/game-board';




ReactDOM.render(
    <Provider store={store}>
        <GameBoard />
    </Provider>, 
    document.getElementById('root')
);

