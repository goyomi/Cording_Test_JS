function solution(k, score) {
    let honerArr = [];
    let lowest = [];
    
    for(const value of score){
        honerArr.push(value);
        honerArr.sort((a, b) => a - b); 
        
        if(honerArr.length > k){
            honerArr.shift();
        }
        
        lowest.push(honerArr[0]);
    }

    return lowest;
}