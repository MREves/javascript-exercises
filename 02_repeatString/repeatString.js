const repeatString = function(string, num) {
  let final_string = ""
  if (num < 0) {
    final_string += "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      final_string+=string;
    }
  }
  return final_string
};

// Do not edit below this line
module.exports = repeatString;
