const leapYears = function(year) {
  // if (year % 100 === 0 && year % 400 > 0) {
  //   return false;
  // } else if (year % 100 === 0 && year % 400 === 0) {
  //   return true;
  // } else if (year % 4 === 0) {
  //   return true;
  // }

  // identify if not a leap year when not divisible by 4
  if (year % 4 != 0) {
    return false;
    // ?dup above line
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
    // identify leap year edge case divisible by 4 and 400 not 100 
  } else if (year % 100 === 0 && year % 400 != 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
}

// Do not edit below this line
module.exports = leapYears;
