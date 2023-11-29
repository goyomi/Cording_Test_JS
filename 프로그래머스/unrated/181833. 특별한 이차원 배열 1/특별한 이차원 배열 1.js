function solution(n) {
    let answerArray = [];
    
    for(let i=0; i<n; i++){
        answerArray[i] = [];
        for(let j=0; j<n; j++){
            if(j === i){
                answerArray[i][j] = 1;
            }else{
                answerArray[i][j] = 0;
            }
        }
    }
    
    return answerArray;
}