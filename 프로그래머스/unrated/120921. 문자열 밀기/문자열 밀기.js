function solution(A, B) {
    if(A === B) return 0;
    
    let count = 0;    
    let C = A;
    
    for(let i=0; i<C.length; i++){
        C = C[C.length - 1] + C.substring(0, C.length - 1);
        count++
        
        if(C === B){
            return count;
        }
     }
    
    return -1;
}