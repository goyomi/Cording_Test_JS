function solution(sides) {
    sides = sides.sort((a, b)=> a - b);
    let answer = new Set();
    
    for(let i=1; i<=sides[1]; i++){
        if(sides[0] + i > sides[1]){
            answer.add(i);
        } 
    }
    
    for(let i=sides[1]+1; i<sides[0]+sides[1]; i++){
        answer.add(i);
    }
    
    return Array.from(answer).length;
}
