function solution(arr, divisor) {
    const diviArr = arr.filter((number)=>number%divisor===0).sort((a,b)=>a-b);
    return (diviArr.length!==0)?diviArr:[-1];
}