function solution(d, budget) {
    d.sort((a, b)=> a-b);    
    let sum = 0;
    let count = 0;
    
    for(const bill of d){
        sum += bill;
        if(sum > budget) break;
        count++
    }
    
    return count;
}