import React from 'react';
import {shallow, mount} from 'enzyme';

import GameBoard from './game-board';

describe('<GameBoard/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameBoard />);
    });
});