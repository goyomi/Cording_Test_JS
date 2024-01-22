function solution(s) {
    let x = s[0];
    let splitCount = 0;
    let xCount = 0; 
    let otherCount = 0; 

    for (let i=0; i<s.length; i++) {
        if (s[i] === x) xCount++;
        else otherCount++;

        if (xCount === otherCount) {
            splitCount++;
            xCount = 0;
            otherCount = 0;
            x = s[i + 1];
        }
    }
    
    if (xCount > 0 || otherCount > 0) splitCount++;
    return splitCount;
}
