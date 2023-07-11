import React from 'react';
import Button from './Button';
import './Calculator.css';

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
