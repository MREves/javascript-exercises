const reverseString = function(string) {
  let reversed_text = "";
  let length_of_string = string.length;

  for (let i = 1; i < length_of_string+1; i++) {
    reversed_text += string.at(-i);
  }
  return reversed_text
};

// Do not edit below this line
module.exports = reverseString;
