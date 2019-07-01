import React from 'react';
import PropTypes from 'prop-types';

export default function LocationEntryForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['LocationEntryForm', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

LocationEntryForm.propTypes = {
};