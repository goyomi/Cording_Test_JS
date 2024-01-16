function solution(n, m, section) {
    let count = 0;
    let i = 0;
    
    while(i < section.length){
        let nextSection = section[i] + m;
        count++;
        
        while(i < section.length && section[i] < nextSection){
            i++;
        }
    }
    
    return count;
}