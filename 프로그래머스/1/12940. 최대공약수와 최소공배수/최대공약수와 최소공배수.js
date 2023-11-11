function solution(n, m) {
    const mul = n * m
    
    if(m > n) [n, m] = [m, n]; 
    while(m !== 0){
        let r = n % m;
        [n, m] = [m, r];
    }
    
    return [n, mul/n];
}