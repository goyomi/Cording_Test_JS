function solution(prices) {
    const answer = [];
    let count = 0;
    
    for(let i=0; i<prices.length; i++){
        for(let j=i+1; j<prices.length; j++){
            let prevPrice = prices[i];
            let nextPrice = prices[j];
            if(prevPrice <= nextPrice){
                count++;
            }else{
                count++;
                break;
            }
        }
        answer.push(count);
        count = 0;
    }
    
    return answer;
}