import React from 'react';
import ReactDOM from 'react-dom';
import RestartButton from './RestartButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RestartButton/>, div);
    ReactDOM.unmountComponentAtNode(div);
});