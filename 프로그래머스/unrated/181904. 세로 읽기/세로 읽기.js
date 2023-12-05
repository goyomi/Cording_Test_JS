function solution(my_string, m, c) {
    let answerStr = '';
    
    for(let i=c-1; i<my_string.length; i+=m){
        answerStr += my_string[i];
    }
    
    return answerStr;
}