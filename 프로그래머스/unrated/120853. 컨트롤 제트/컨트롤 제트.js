function solution(s) {    
    const noSpace = s.split(' ');
    const numStr = noSpace.map(v => parseInt(v));
    let answer = 0;
    
    for(let i=0; i<numStr.length; i++){
        if(!Number.isNaN(numStr[i])){
            answer += numStr[i];
        }else if(Number.isNaN(numStr[i])){
            answer -= numStr[i - 1];
        }
    }

    return answer;
}