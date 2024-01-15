function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let countA = 0, countB = 0, countC = 0;
    
    answers.forEach((answer, index) => {
        if (answer === a[index % a.length]) countA++;
        if (answer === b[index % b.length]) countB++;
        if (answer === c[index % c.length]) countC++;
    });
    
    const maxScore = Math.max(countA, countB, countC);
    const result = [];
    if (countA === maxScore) result.push(1);
    if (countB === maxScore) result.push(2);
    if (countC === maxScore) result.push(3);
    
    return result;
}
