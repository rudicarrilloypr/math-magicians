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

  // Agrega aquí las pruebas para la multiplicación, división y porcentaje
});
