import React from 'react';
import ReactDOM from 'react-dom';
import LocationEntry from './LocationEntry'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationEntry/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
