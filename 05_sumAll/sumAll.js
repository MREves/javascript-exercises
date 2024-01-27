const sumAll = function(startNum, endNum) {
  let arrayOfNumbers = []
  let summedArray = 0
  
  let start = startNum
  let end = endNum
  
  let errorStatement = "ERROR"

  if (startNum > endNum) {
    start = endNum;
    end = startNum;
  } else if (startNum < 0 || endNum < 0) {
    return errorStatement
  } else if (typeof startNum != 'number' || typeof endNum != 'number') {
    return errorStatement
  }

  for (let i = start; i <= end; i++) {
    arrayOfNumbers.push(i);
  }

  arrayOfNumbers.forEach(num => {
    summedArray+=num;
  })
  return summedArray
};

// Do not edit below this line
module.exports = sumAll;
