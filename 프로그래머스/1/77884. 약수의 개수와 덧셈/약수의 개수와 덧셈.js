function solution(left, right) {
    let count = 0;
    for(let i=left; i<=right; i++){
        const calculate = Number.isInteger(Math.sqrt(i))
        if(calculate === false) count+=i;
        if(calculate === true) count-=i;
    }
    return count;
}