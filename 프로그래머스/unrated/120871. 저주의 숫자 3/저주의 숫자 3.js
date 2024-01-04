function solution(n) {
    let threeX = [];
    let i = 1;
    
    while(threeX.length < n){
        if(i % 3 !== 0 && !String(i).includes('3')) threeX.push(i);
        i++;
    }

    return threeX[n - 1];
}