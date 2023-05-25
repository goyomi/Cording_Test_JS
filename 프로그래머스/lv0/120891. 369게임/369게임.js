function solution(order) {
  var answer = 0;
  order.toString().split('').map((v) => {
    if (parseInt(v) === 0) {
      answer += 0;
    } else if (parseInt(v) % 3 === 0) {
      answer += 1;
    }
  });
  return answer;
}