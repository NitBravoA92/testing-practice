const capitalize = require('./capitalize');
it('add the string softwaredevone which should return Softwaredevone', () => {
  const strToTest = 'softwaredevone';

  const strCapitalize = capitalize(strToTest);

  expect(strCapitalize).toBe('Softwaredevone');
})

it('add the string moon which should return Moon', () => {
  const strToTest = 'moon';

  const strCapitalize = capitalize(strToTest);

  expect(strCapitalize).toBe('Moon');
})

it('add the string javascript which should return Javascript', () => {
  const strToTest = 'javascript';

  const strCapitalize = capitalize(strToTest);

  expect(strCapitalize).toBe('Javascript');
})

it('add the string JAVA which should return JAVA', () => {
  const strToTest = 'JAVA';

  const strCapitalize = capitalize(strToTest);

  expect(strCapitalize).toBe('JAVA');
})