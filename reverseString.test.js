const reverseString = require('./reverseString');

it('Add the string coca-cola which inverted is aloc-acoc', () => {
  const stringToRev = 'coca-cola';

  const revString = reverseString(stringToRev);

  expect(revString).toMatch('aloc-acoc');
})

it('Add the string apple which inverted is elppa', () => {
  const stringToRev = 'apple';

  const revString = reverseString(stringToRev);

  expect(revString).toMatch('elppa');
})

it('Add the string movies which inverted is seivom', () => {
  const stringToRev = 'movies';

  const revString = reverseString(stringToRev);
  
  expect(revString).toMatch('seivom');
})