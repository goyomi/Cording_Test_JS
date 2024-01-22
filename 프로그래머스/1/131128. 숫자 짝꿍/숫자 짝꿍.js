function solution(X, Y) {
    const countX = countDigits(X);
    const countY = countDigits(Y);
    let result = '';
    
    for(let i=9; i>=0; i--){
        const commonCount = Math.min(countX[i], countY[i]);
        result += i.toString().repeat(commonCount);
    }
    
    if(result.length === 0){
        return '-1';
    }else if(result[0] === '0'){
        return '0';
    }
    
    return result;
}

function countDigits (num){
    const count = Array(10).fill(0);
    for (const digit of num) {
        count[parseInt(digit, 10)]++;
    }
    return count;
}