function solution(t, p) {
    const pLength = p.length;
    const pNumber = parseInt(p);
    let count = 0;

    for(let i = 0; i <= t.length - pLength; i++) {
        const str = t.substring(i, i + pLength);
        const strToNum = parseInt(str);
        
        if(strToNum <= pNumber) count ++
    }
    
    return count;
}