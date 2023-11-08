function solution(price, money, count) {
    let charge = 0;
    
    for(let i=1; i<=count; i++){
        charge += (price * i);
    }
    
    if (money - charge < 0) {
        return Math.abs(money - charge);
    } else return 0;
}