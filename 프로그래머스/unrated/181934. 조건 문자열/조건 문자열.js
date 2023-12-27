function solution(ineq, eq, n, m) {
    
    if(ineq === '>' && eq === '=' || ineq === '>' && eq === '!'){
        if(n >= m || n > m) return 1;
    }else if(ineq === '<' && eq === '=' || ineq === '<' && eq === '!'){
        if(n <= m || n < m) return 1;
    }
    
    return 0;
}