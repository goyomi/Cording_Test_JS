function solution(picture, k) {
    let answer = [];
    
    for(let i=0; i<picture.length; i++){
        let expandRow = picture[i].split('').map(v=>v.repeat(k)).join('');
        
        for(let j=0; j<k; j++){
            answer.push(expandRow);
        }
    }
    
    return answer;
}