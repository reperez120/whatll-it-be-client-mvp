import React from 'react';
import ReactDOM from 'react-dom';
import GetDrinkButtom from './GetDrinkButton'

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetDrinkButtom/>, div);
    ReactDOM.unmountComponentAtNode(div);
});