function solution(x1, x2, x3, x4) {
    const orResult1 = x1 || x2;
    const orResult2 = x3 || x4;
    const andResult = orResult1 && orResult2
    
    return andResult;
}