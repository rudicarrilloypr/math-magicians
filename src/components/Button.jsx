import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value } = props;

  // Define button types based on their values
  let type = '';
  if (['+', 'x', '-', '÷'].includes(value)) {
    type = 'operation';
  } else if (!Number.isNaN(Number(value))) {
    type = 'number';
  } else {
    type = 'function';
  }

  return <button type="button" data-type={type} data-value={value}>{value}</button>;
}

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Button;
