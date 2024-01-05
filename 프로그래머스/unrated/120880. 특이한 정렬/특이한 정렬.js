function solution(numlist, n) {
    let differences = numlist.map(num => {
        return {num: num, diff: Math.abs(num - n)};
    });
    
    differences.sort((a, b) => {
        if(a.diff === b.diff){
            return b.num - a.num // 차이가 같으면 숫자가 큰게 앞으로
        }
        return a.diff - b.diff;
    });
    
    return differences.map(item => item.num);
}

