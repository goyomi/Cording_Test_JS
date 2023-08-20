function solution(s) {
    let answer = '';
    const sLen = s.length
    
    if(sLen%2===0){
        answer+=s[(sLen/2)-1];
        answer+=s[sLen/2];
    }else{
        answer+=s[Math.floor(sLen/2)];
    }
    
    return answer;
}