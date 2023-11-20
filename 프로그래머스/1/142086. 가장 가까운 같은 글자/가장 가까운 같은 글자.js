function solution(s) {
    let lastPosition = {};
    let distance = [];
    
    for(let i=0; i<s.length; i++){
        let char = s[i];
        
        if(lastPosition.hasOwnProperty(char)){
            distance.push(i - lastPosition[char]);
        }else{
            distance.push(-1);
        }
        
        lastPosition[char] = i;
    }
    
    return distance;
}