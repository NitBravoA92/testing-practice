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

it('Add the string Family which has 6 characters', () => {
  const testString = 'Family';

  const size = stringLength(testString);

  expect(size).toBe(6);
})

it('Add the string Developer which has 9 characters', () => {
  const testString = 'Developer';

  const size = stringLength(testString);

  expect(size).toBe(9);
})

it('Add the string America which has 7 characters', () => {
  const testString = 'America';

  const size = stringLength(testString);

  expect(size).toBe(7);
})