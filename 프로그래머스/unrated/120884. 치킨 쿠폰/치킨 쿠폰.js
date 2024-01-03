function solution(chicken) {
    let coupon = 0;
    for(let i=10; i<=chicken; i+=10){
        chicken++;
        coupon++;
    }
    
    return coupon;
}
