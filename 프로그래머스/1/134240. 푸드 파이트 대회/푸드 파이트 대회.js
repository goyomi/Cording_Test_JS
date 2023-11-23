function solution(food) {
    
    let leftSide = '';
    let rightSide = '';
    
    for(let i=1; i<food.length; i++){
        let half = Math.floor(food[i] / 2);
        leftSide += i.toString().repeat(half)
    }
    
    rightSide = leftSide.split('').reverse().join('');
    
    return leftSide + '0' + rightSide;
    
}