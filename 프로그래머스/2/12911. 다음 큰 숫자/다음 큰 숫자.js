function solution(n) {
    const countOnes = num => num.toString(2).match(/1/g).length;
    const standardCount = countOnes(n);
    
    let nNextNum = n + 1;
    while (true) {
        if (standardCount === countOnes(nNextNum)) {
            return nNextNum;
        }
        nNextNum++;
    }
}