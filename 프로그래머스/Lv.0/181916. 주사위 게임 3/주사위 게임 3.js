function solution(a, b, c, d) {
    const diceResult = [a, b, c, d];
    
    if(new Set(diceResult).size === 1){
        return 1111 * a;
    }
    
    if(new Set(diceResult).size === 2){
        const [p, q] = [...new Set(diceResult)];
        let count = 0;
        for(let i=0; i<diceResult.length; i++){
            for(let j=i+1; j<diceResult.length; j++){
                if(diceResult[i]===diceResult[j]) count++
            }
        }

        if(count === 3){
            let pCount = 0, qCount = 0;
            diceResult.forEach(n=>{
                n === p ? pCount++ : qCount++;
            });            
            return pCount > qCount ? 
            Math.pow(10 * p + q, 2) : 
            Math.pow(10 * q + p, 2);
        }else if(count === 2){
            return (p + q) * Math.abs(p - q);
        }
    }
    
    if(new Set(diceResult).size === 3){
        const [p, q, r] = [...new Set(diceResult)];
        let pCount = 0, qCount = 0;        
        diceResult.forEach(n=>{
            n === p && pCount++;
            n === q && qCount++;
        });        
        if(pCount === 2){
            return q * r;
        }else if(qCount === 2){
            return p * r;
        }else{
            return p * q;
        }  
    }
        
    return Math.min(...diceResult);
}