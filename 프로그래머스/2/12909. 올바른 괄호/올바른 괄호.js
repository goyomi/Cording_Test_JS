function solution(s){
    let counter = 0;
    
    for(const bracket of s){
        if(bracket === "("){
            counter++;
        }else if(bracket === ")"){
            counter--;
            if(counter < 0){
                return false;
            }
        }
    }
    
    return counter === 0;
}