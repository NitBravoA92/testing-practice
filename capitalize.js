const capitalize = str => {
  if(str.length === 0) {
    throw new Error('Fail: The string should not be empty');
  }
  const cleanStr = str.trim();
  const firstLetter = cleanStr.charAt(0).toUpperCase();
  const bodyOfStr = cleanStr.slice(1);
  return firstLetter+bodyOfStr;
}

module.exports = capitalize;