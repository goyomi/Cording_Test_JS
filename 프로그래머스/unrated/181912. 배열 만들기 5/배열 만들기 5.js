function solution(intStrs, k, s, l) {
    let answerArr = [];
    
    for(const intStr of intStrs){
        const str = parseInt(intStr.slice(s, s + l));
        if(str > k) answerArr.push(str);
    }
    
    return answerArr;
}