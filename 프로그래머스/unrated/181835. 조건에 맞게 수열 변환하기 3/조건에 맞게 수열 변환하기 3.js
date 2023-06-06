function solution(arr, k) {
    var answer = [];
    arr.map(v=>k%2===0?answer.push(v+k):answer.push(v*k))
    return answer;
}