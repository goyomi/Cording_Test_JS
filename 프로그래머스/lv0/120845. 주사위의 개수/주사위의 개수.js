function solution(box, n) {
    var answer = 1;
    box.map(v => answer *= Math.floor(v/n))
    return answer;
}