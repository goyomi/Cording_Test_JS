function solution(A,B){
    const Arr1 = A.sort((a, b) => a - b);
    const Arr2 = B.sort((a, b) => b - a);
    
    return Arr1.reduce((acc, cur, idx) => acc + cur * Arr2[idx], 0);
}