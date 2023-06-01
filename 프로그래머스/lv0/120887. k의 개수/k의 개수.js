function solution(i, j, k) {
    var plus = '';
    var answer = ''
    k = String(k);
    for(let n=i; n<=j; n++){
        plus+=n;
    }
    [...plus].map((v)=>{
        if(v === k) answer += 1;
    })
    return answer.length;
}