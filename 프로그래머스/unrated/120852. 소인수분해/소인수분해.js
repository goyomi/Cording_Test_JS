function solution(n) {
    let primeNum = [];
    
    for(let i=2; i<=n; i++){
        while(n % i === 0){
            if(primeNum.length === 0 || primeNum[primeNum.length - 1] !== i){
                primeNum.push(i);
            }
            n /= i;
        }
    }

    return primeNum;
}