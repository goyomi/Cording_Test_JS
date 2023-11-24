function solution(n){
    
    let bettery = 0;
    
    while(n > 0){
        if(n % 2 === 0){
            n /= 2;
        }else if(n % 2 !== 0){
            n -=1;
            bettery += 1;
        }
    }

    return bettery;
}