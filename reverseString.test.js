const reverseString = require('./reverseString');

it('Add the string coca-cola which inverted is aloc-acoc', () => {
  const stringToRev = 'coca-cola';
  const revString = reverseString(stringToRev);
  expect(revString).toBe('aloc-acoc');
})

it('Add an empty string', () => {
  const stringToRev = '';
  const revString = reverseString(stringToRev);
  expect(revString).toBe('');
})

it('Add undefined', () => {
  const stringToRev = undefined;
  const revString = reverseString(stringToRev);
  expect(revString).toBe('denifednu');
})