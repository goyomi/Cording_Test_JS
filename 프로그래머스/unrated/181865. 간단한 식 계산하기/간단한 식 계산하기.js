function solution(binomial) {
    const parts = binomial.split(' ');
    const a = Number(parts[0]);
    const op = parts[1];
    const b = Number(parts[2]);
    
    switch(op){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return "올바르지 않은 식입니다."
    }
    
}