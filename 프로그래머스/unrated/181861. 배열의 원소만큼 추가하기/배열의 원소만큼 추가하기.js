function solution(arr) {
    let answer = [];
    for(let i=0; i<arr.length; i++){
        let a=arr[i];
        for(let j=0; j<a; j++){
            answer.push(a);
        }
    }
    return answer;
}