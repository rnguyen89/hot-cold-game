import React from 'react';
import {shallow, mount} from 'enzyme';

import {GameFeedback} from './game-feedback';

describe('<GameFeedback/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameFeedback />);
    })

    it('Renders some feedback', ()=> {
        let TEST_FEEDBACK = 'You are making a guess!'

        let wrapper = shallow(<GameFeedback feedback={TEST_FEEDBACK} />);
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    });
});