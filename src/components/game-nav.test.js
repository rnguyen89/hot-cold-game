import React from 'react';
import {shallow, mount} from 'enzyme';

import {GameNav} from './game-nav';

describe('<GameNav/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameNav />);
    });

    it('Should call onRestartGame when new game is clicked', () => {
        const dispatch = jest.fn();        
        // const callback = jest.fn();
        const wrapper = shallow(<GameNav onRestartGame={dispatch} dispatch={dispatch}/>);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();

    });
});