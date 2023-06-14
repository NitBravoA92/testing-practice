const stringLength = require('./stringLength');

it('Add the string World which has 5 characters', () => {
  const testString = 'World';
  const size = stringLength(testString);
  expect(size).toBe(5);
})

it('Add the string H which has 1 character', () => {
  const testString = 'H';
  const size = stringLength(testString);
  expect(size).toBe(1);
})

it('Add an empty string which has 0 characters', () => {
  const testString = '';
  const size = stringLength(testString);
  expect(size).toBe(0);
})

it('Add the string Developer which has 9 characters', () => {
  const testString = 'Developer';
  const size = stringLength(testString);
  expect(size).toBe(9);
})

it('Add the string LatinAmerica which has 12 characters', () => {
  const testString = 'LatinAmerica';
  const size = stringLength(testString);
  expect(size).toBe(12);
})