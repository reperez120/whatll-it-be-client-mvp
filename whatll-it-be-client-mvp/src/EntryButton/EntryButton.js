import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

export default function EntryButton(props) {
  const { tag, className, children, ...otherProps } = props
      return (
          <div className='Entry'>
              <button className='entry' type='submit'>Get started!</button>
          </div>
  )
    EntryButton.defaultProps ={
    tag: 'a',
  }
}
