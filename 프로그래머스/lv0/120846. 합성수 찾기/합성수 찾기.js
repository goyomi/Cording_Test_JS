function solution(n) {
  var answer = 0;
  for (let i = 4; i <= n; i++) {
      let counter =1;
    for (let j = 1; j <= i; j++) {
        if(i%j===0) counter+=1;
      }
      if(counter>3) answer+=1;
    }
  return answer;
}
