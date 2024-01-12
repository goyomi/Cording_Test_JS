function solution(numer1, denom1, numer2, denom2) {
    const newNumer = numer1 * denom2 + numer2 * denom1;
    const newDenom = denom1 * denom2 
    const gcdVal = gcd(newNumer, newDenom);
    
    return gcdVal === 1 ? 
            [newNumer, newDenom] : 
            [newNumer / gcdVal, newDenom / gcdVal];
}

function gcd(a, b){
    while(b !== 0){
        let r = a % b;
        a = b;
        b = r;
    }
		return a;
}