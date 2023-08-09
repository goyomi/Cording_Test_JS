function solution(numbers) {
    let sum=0;
    const asc=numbers.sort((a,b)=>a-b);
    
    for(let i=0; i<=9; i++){
        if(asc.indexOf(i)===-1){
            sum+=i;
        }
    }
    return sum;
}