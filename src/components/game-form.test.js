import React from 'react';
import {shallow, mount} from 'enzyme';

import {GameForm} from './game-form';

describe('<GameForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameForm />);
    });

    it('Should fire onMakeGuess callback when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GameForm onMakeGuess={dispatch} dispatch={dispatch}/>);

        const value = 8;
        wrapper.find('input[type="number"]').instance().value = value;

        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith({
            guess: "8",
            type: "MAKE_GUESS"
        });
    });
});