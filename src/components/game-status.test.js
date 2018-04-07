import React from 'react';
import {shallow} from 'enzyme';

import GameStatus from './game-status';

describe('<GameStatus/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameStatus guesses={[]}/>);
    })
})