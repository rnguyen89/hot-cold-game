import React from 'react';
import {shallow, mount} from 'enzyme';

import GameHeader from './game-header';

describe('<GameHeader/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameHeader />);
    })
})