function solution(number, limit, power) {
    let totalWeight = 0;
    
    for(let i=1; i<=number; i++){
        let factorsCount = 0;
        for(let j=1; j*j<=i; j++){
            if(i % j === 0){
                factorsCount += (j * j === i) ? 1 : 2;
            }
        }
        
        let attackPower = factorsCount > limit ? power : factorsCount;
        totalWeight += attackPower;        
    }
    
    return totalWeight;
}