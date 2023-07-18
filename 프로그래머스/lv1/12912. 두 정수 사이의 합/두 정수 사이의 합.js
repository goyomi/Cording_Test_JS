function solution(a, b) {
    if(a===b) return a;
    
    let start, end;
    if(a<b){
        start=a;
        end=b;
    }else{
        start=b;
        end=a;
    }
    
    let sum=0;
    for(let i=start; i<=end; i++){
        sum+=i;
    }
    
    return sum;
}