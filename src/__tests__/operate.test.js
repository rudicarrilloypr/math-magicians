import operate from '../logic/operate';

describe('operate function', () => {
  it('performs addition correctly', () => {
    const result = operate(5, 10, '+');
    expect(result).toBe('15');
  });

  it('performs subtraction correctly', () => {
    const result = operate(10, 5, '-');
    expect(result).toBe('5');
  });

  it('performs multiplication correctly', () => {
    const result = operate(6, 7, 'x');
    expect(result).toBe('42');
  });

  it('performs division correctly', () => {
    const result = operate(20, 5, '÷');
    expect(result).toBe('4');
  });

  it('returns error when divide by zero', () => {
    const result = operate(20, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('performs modulus operation correctly', () => {
    const result = operate(10, 3, '%');
    expect(result).toBe('1');
  });

  it('throws error for unknown operation', () => {
    expect(() => {
      operate(5, 5, '^');
    }).toThrow('Unknown operation \'^\'');
  });
});
