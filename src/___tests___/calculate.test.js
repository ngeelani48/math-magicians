import calculate from '../logic/calculate';

describe('Calculate testing', () => {
  it('Always an object should be returned', () => {
    const type = typeof (calculate({}, 'AC'));
    expect(type).toBe('object');
  });
  it('For AC buttonshould return an object with total, next and operation with null ', () => {
    const result = (calculate({}, 'AC'));
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should add two numbers and return object', () => {
    const input = { total: '4', next: '2', operation: '+' };
    const output = { total: '6', next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });

  it('should subtract two numbers and return object', () => {
    const input = { total: '4', next: '2', operation: '-' };
    const output = { total: '2', next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });

  it('should multiply two numbers and return object', () => {
    const input = { total: '4', next: '2', operation: 'x' };
    const output = { total: '8', next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });

  it('should devide two numbers and return object', () => {
    const input = { total: '4', next: '2', operation: '÷' };
    const output = { total: '2', next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });

  it('should find modulo of two numbers and return object', () => {
    const input = { total: '4', next: '2', operation: '%' };
    const output = { total: '0', next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });

  it('should through error if devided by 0', () => {
    const input = { total: '4', next: '0', operation: '÷' };
    const output = { total: "Can't divide by 0.", next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });

  it('should through error if operation is modulo by zero', () => {
    const input = { total: '4', next: '0', operation: '%' };
    const output = { total: "Can't find modulo as can't divide by 0.", next: null, operation: null };

    expect(calculate(input, '=')).toEqual(output);
  });
});
