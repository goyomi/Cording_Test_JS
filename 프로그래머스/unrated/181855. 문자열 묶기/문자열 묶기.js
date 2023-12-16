function solution(strArr) {
    const lengthCount = {}
    
    for(const str of strArr){
        const len = str.length;
        lengthCount[len] = (lengthCount[len] || 0) + 1;
    }
    
    let maxGroupSize = 0;
    for(const len in lengthCount){
        if(lengthCount[len] > maxGroupSize){
            maxGroupSize = lengthCount[len];
        }
    }
    
    return maxGroupSize;
}