// 구조 분해 할당
const { odd, even } = require("./var");

function checkOddOrEven(number) {
  if (number % 2) return odd;
  else return even;
}

module.exports = checkOddOrEven;

// 함수의 경우 다르다.
// module.exports !== exports === {}
