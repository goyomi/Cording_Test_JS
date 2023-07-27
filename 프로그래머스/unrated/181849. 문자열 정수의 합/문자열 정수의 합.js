function solution(num_str) {
    const arr = [...num_str];
    let sum = 0;
    arr.map((item)=>{
        sum+=Number(item);
    })
    return sum;
}