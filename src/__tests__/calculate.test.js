import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('resets everything when "AC" is clicked', () => {
    const obj = { total: '5', next: '10', operation: '+' };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  // Agrega aquí las pruebas para los demás botones y casos
});
