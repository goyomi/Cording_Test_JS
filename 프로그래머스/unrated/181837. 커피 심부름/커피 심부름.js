function solution(orders) {
    let charge = 0;
    
    for(const order of orders){
        if(order.match(/americano/) || order.match(/anything/)){
            charge += 4500;
        }else if(order.match(/latte/)){
            charge += 5000;
        }
    }
    
    return charge;
}