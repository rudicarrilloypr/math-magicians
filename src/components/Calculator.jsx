import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

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

function Calculator() {
  const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <div className="calculator">
      <div className="result">0</div>
      {buttons.map((buttonValue) => (
        <Button key={buttonValue} value={buttonValue} />
      ))}
    </div>
  );
}

export default Calculator;
