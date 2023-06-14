const stringLength = (str) => {
  const size = str.length;
  if(size < 1){
    throw new Error('Error: The string should be greater than 0');
  }
  if(size > 10){
    throw new Error('Error: The string should be not longer than 10 characters');
  }
  return size;  
}
module.exports = stringLength;