import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'


export default function RestartButton(props){
    const { tag, className, children, ...otherProps } = props
        return (
            <div className='RstartButton'>
                <button className='restart' type='submit'>Try again?</button>
            </div>
    )
    RestartButton.defaultProps ={
        tag: 'a',
      }

}



  