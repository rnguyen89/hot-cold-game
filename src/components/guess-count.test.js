import React from 'react';
import { shallow } from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount/>', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('should render the amount of guesses', () => {
        const value = 10;
        const wrapper = shallow(<GuessCount guessCount={value} />);
        expect(wrapper.text()).toEqual(`You've made 10 guesses`)
    });
});