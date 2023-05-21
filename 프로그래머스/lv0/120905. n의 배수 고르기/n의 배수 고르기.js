function solution(n, numlist) {
    var answer = [];
    for(let i=0; i<numlist.length; i++){
        let num = numlist[i]
        if(num%n ===0) answer.push(num)
    }
    return answer;
}