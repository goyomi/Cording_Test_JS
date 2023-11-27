function solution(n) {
    let a = 1, b = 1, temp;

    for(let i=2; i<=n; i++){
        temp = (a + b) % 1234567;
        a = b;
        b = temp
    }
    
    return b;
}