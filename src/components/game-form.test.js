import React from 'react';
import {shallow, mount} from 'enzyme';

import GameForm from './game-form';

describe('<GameForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameForm />);
    });

    it('Should fire onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GameForm onMakeGuess={callback} />);
        const value = 8;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
});