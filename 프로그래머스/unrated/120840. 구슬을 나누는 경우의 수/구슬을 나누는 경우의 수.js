function solution(balls, share) {
    let numerator = 1;
    let denominator = 1;
    
    for(let i=0; i<share; i++){
        console.log(i)
        numerator *= (balls - i);
        denominator *= (i + 1);
    }

    return Math.round(numerator / denominator);
}
