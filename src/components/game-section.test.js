import React from 'react';
import {shallow} from 'enzyme';

import GameSection from './game-section';

describe('<GameSection/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameSection />);
    })
})