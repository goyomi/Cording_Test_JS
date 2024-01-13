function solution(n) {
    let primeNumber = [];
    let isPrime = new Array(n + 1).fill(true);
    
    for(let i=2; i<=n; i++){
        if(isPrime[i]){
            primeNumber.push(i);
            for(let j=i*i; j<=n; j+=i){
                isPrime[j] = false;
            }
        }
    }
    
    return primeNumber.length;
}