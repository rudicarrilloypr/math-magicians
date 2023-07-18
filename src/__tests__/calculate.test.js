// calculate.test.js
import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('updates the number on the display when a number button is clicked', () => {
    let data = { total: null, next: null, operation: null };
    data = calculate(data, '5');
    expect(data).toEqual({ total: null, next: '5', operation: undefined }); // Cambiado null a undefined
  });

  it('updates the operation when an operation button is clicked', () => {
    let data = { total: '5', next: null, operation: null };
    data = calculate(data, '+');
    expect(data).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('updates the next number when a number button is clicked after an operation button', () => {
    let data = { total: '5', next: null, operation: '+' };
    data = calculate(data, '6');
    expect(data).toEqual({ total: '5', next: '6', operation: '+' });
  });

  it('performs the operation when the "=" button is clicked', () => {
    let data = { total: '5', next: '6', operation: '+' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: '11', next: null, operation: null });
  });

  it('adds a decimal point to next when "." button is clicked', () => {
    let data = { total: null, next: '5', operation: null };
    data = calculate(data, '.');
    expect(data).toEqual({ total: null, next: '5.', operation: null });
  });

  it('does not add a decimal point to next when "." button is clicked if next already contains a decimal point', () => {
    let data = { total: null, next: '5.', operation: null };
    data = calculate(data, '.');
    expect(data).toEqual({ total: null, next: '5.', operation: null });
  });

  it('negates the value of next when "+/-" button is clicked', () => {
    let data = { total: null, next: '5', operation: null };
    data = calculate(data, '+/-');
    expect(data).toEqual({ total: null, next: '-5', operation: null });
  });

  it('does not change the value of next when "+/-" button is clicked if next is null', () => {
    let data = { total: null, next: null, operation: null };
    data = calculate(data, '+/-');
    expect(data).toEqual({});
  });
});
