function solution(n) {
    let arr=[];
    
    while(n!==1){
        arr.push(n);
        if(n%2===0){
            n=n/2;
        }else n=3*n+1;
    }
    arr.push(1);
    
    return arr;
}