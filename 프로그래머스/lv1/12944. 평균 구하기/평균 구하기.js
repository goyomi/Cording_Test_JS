function solution(arr) {
    let answer = 0;
    arr.map(value=> answer+=value/arr.length);
    return answer;
}