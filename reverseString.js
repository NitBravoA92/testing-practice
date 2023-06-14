const reverseString = str => {
  if(str === undefined) {
    throw new Error('Fail: the string should not be undefined');
  }
  if(!str.length) {
    throw new Error('Fail: the string should not be empty');
  }
  return str.split('').reverse().join('');
}
module.exports = reverseString;