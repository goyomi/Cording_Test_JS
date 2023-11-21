function solution(array, commands) {
    
    let answer = [];
    
    for(const command of commands){
        let arr = array.slice(command[0] - 1, command[1]).sort((a,b) => a - b);
        answer.push(arr[command[2] - 1]);
    }
    
    return answer;
    
}