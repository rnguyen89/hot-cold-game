import React from 'react';
import {shallow, mount} from 'enzyme';

import GameInfo from './game-info';

describe('<GameInfo/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameInfo />);
    });
});