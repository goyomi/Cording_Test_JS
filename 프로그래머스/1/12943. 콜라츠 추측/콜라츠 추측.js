function solution(num) {
    let count = 0;
    
    if(num === 1){
        return 0;
    } else {
        while(num !== 1){
            if(num % 2 === 0){
                num =  num / 2;
            }else{
                num = (num * 3) + 1;            
            }
            count ++
        }
    }
    
    return (count >= 500) ? -1 : count;
}