const calculator = require('./calculator');

describe('The calculator performs the sum of', () => {
  it('1 y 3 which is expected to be 4', () => {
    const calculatorSum = new calculator(1, 3);

    const sum1 = calculatorSum.add();

    expect(sum1).toBe(4);
  })

  it('6 y 8 which is expected to be 14', () => {
    const calculatorSum = new calculator(6, 8);

    const sum2 = calculatorSum.add();

    expect(sum2).toBe(14);
  })

  it('2 y 0 which is expected to be 2', () => {
    const calculatorSum = new calculator(2, 1);

    const sum3 = calculatorSum.add();

    expect(sum3).toBe(2);
  })
})

describe('The calculator performs the subtract of', () => {
  it('5 y 2 which is expected to be 3', () => {
    const calculatorSubtract = new calculator(5, 2);

    const subtract1 = calculatorSubtract.subtract();

    expect(subtract1).toBe(3);
  })

  it('0 y 9 which is expected to be -9', () => {
    const calculatorSubtract = new calculator(0, -9);

    const subtract2 = calculatorSubtract.subtract();

    expect(subtract2).toBe(-9);
  })

  it('12 y 11 which is expected to be 1', () => {
    const calculatorSubtract = new calculator(12, 11);

    const subtract3 = calculatorSubtract.subtract();

    expect(subtract3).toBe(1);
  })
})

describe('The calculator performs the division of', () => {
  it('25 by 5 which is expected to be 5', () => {
    const calculatorDivide = new calculator(25, 5);

    const divide1 = calculatorDivide.divide();

    expect(divide1).toBe(5);
  })
  it('0 y 15 which is expected to be 0', () => {
    const calculatorDivide = new calculator(0, 15);

    const divide2 = calculatorDivide.divide();

    expect(divide2).toBe(0);
  })
  it('90 y 0 which is undefined', () => {
    const calculatorDivide = new calculator(90, 0);

    const divide3 = calculatorDivide.divide();

    expect(divide3).toBe(undefined);
  })
})

describe('The calculator performs the multiplication of', () => {
  it('45 by 0 which is expected to be 0', () => {
    const calculatorMultiply = new calculator(45, 0);

    const multiply1 = calculatorMultiply.multiply();

    expect(multiply1).toBe(0);
  })
  it('0.5 by 0.5 which is expected to be 0.25', () => {
    const calculatorMultiply = new calculator(0.5, 0.5);

    const multiply2 = calculatorMultiply.multiply();

    expect(multiply2).toBe(0.25);
  })
  it('60 y 2 which is expected to be 120', () => {
    const calculatorMultiply = new calculator(60, 2);

    const multiply3 = calculatorMultiply.multiply();

    expect(multiply3).toBe(120);
  })
})