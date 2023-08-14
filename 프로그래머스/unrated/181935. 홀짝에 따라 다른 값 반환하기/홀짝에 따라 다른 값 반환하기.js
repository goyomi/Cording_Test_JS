function solution(n) {
    let num = 0;
    if(n%2!==0){
        for(let i=1; i<=n; i+=2){
            num+=i;
        }
    }else{
        for(let i=0; i<=n; i+=2){
            num+=(i**2)
        }
    }
    return num;
}