function solution(n, k) {
    let array = [];
    for(let i=k; i<=n; i+=k){
        array.push(i)
    }
    return array;
}