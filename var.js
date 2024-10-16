const odd = "홀수입니다.";
const even = "짝수입니다.";


// 두 가지 이상 exports할 경우 사용
exports.odd = odd;  
exports.even = even;

/* 위의 코드나 아래의 코드나 둘 중 하나만 사용.
module.exports = {
  odd,
  even,
};
*/

// module.exports === exports === {}
