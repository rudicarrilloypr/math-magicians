import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate.js';
import './Calculator.css';

function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const display = (total || '') + (operation || '') + (next || '');

  return (
    <div className="calculator">
      <div className="result">{display || '0'}</div>
      {buttons.map((buttonValue) => (
        <Button key={buttonValue} value={buttonValue} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Calculator;
