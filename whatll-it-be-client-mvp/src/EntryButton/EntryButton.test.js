import React from 'react';
import ReactDOM from 'react-dom';
import EntryButton from './EntryButton'

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<EntryButton/>, div);
ReactDOM.unmountComponentAtNode(div);
});