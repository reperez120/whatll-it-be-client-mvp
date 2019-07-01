import React from 'react';
import ReactDOM from 'react-dom';
import LocationEntryForm from './LocationEntryForm'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationEntryForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
});