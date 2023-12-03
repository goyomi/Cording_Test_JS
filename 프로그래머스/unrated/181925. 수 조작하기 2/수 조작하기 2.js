function solution(numLog) {
    let answerStr = '';
    
    for(let i=0; i<numLog.length; i++){
        let diff = numLog[i] - numLog[i + 1];
        
        if(diff === -1){
            answerStr += 'w'
        }else if(diff === 1){
            answerStr += 's'
        }else if(diff === -10){
            answerStr += 'd'
        }else if(diff === 10){
            answerStr += 'a'
        }
    }
    
    return answerStr;
}