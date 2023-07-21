function solution(x) {
    const digit = String(x).split('').map(Number);
    const sum = digit.reduce((acc,cur)=>acc+cur,0);
    return x % sum ===0;
}