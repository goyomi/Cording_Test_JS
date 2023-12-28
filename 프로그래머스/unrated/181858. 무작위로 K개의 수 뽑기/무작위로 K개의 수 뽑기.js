function solution(arr, k) {
    let answer = [];
    
    for(let i=0; i<arr.length; i++){
        if(answer.includes(arr[i])) continue;
        answer.push(arr[i]);
        if(answer.length === k) break;
    }
    
    while(answer.length < k){
        answer.push(-1);
    }
    
    return answer;
}