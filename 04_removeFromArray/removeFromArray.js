const removeFromArray = function(array, ...args) {
  let newArray = array;

  for (const arg of args) {
    if (newArray.includes(arg)) {
      newArray = newArray.filter(item => item !== arg);
    }
  }  
  return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
