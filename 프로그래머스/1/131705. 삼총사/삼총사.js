function solution(number) {
    number = number.sort((a,b)=>a-b);
    let counte = 0;
    
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
               if(number[i]+number[j]+number[k]===0) counte++
            }
        }
    }
    
    return counte
}