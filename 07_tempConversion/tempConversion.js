// tested and works
const convertToCelsius = function(F) {
  let celsius = Math.round(((5/9) * (F - 32))*10)/10
  return celsius
};

// not working
const convertToFahrenheit = function(C) {
  let farenheit = Math.round(((9/5) * C + 32)*10)/10;
  return farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
