function solution(n, t, m, p) {
    let numberLine = '';
    let result = ''
    
    for(let i=0; i<t*m; i++){
        numberLine += i.toString(n).toUpperCase();
    }
    
    for(let j=p-1; j<t*m; j+=m){
        if(result.length < t){
            result += numberLine[j];
        }else{
            break;
        }
    }
    
    return result;
}
