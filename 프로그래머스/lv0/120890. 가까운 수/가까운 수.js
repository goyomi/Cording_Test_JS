function solution(array, n) {
    var answer = [];
    array.sort();
    array.forEach((v,i)=>{
        answer.push(Math.abs(n-v));
    })
    return array[answer.indexOf(Math.min(...answer))];
}
