import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'


export default function GetDrinkButton(props) {
    const { tag, className, children, ...otherProps } = props
        return (
            <div className='LocationEntry'>
                <button className='location' type='submit'>What'll It be?</button>
            </div>
    )
    GetDrinkButton.defaultProps ={
        tag: 'a',
    }
}