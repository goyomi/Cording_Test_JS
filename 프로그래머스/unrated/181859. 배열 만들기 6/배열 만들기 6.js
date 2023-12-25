function solution(arr) {
    let stk = [];
    
    for(let i=0; i<arr.length;){
        if(stk.length === 0 || 
           stk.length !== 0 && stk[stk.length -1] !== arr[i]){
            stk.push(arr[i]);
             i++;
        }else if(stk.length !== 0 && stk[stk.length -1] === arr[i]){
            stk.pop(stk[stk.length -1]);
            i++;
        }
    }
    
    if(stk.length === 0) return [-1];
    
    return stk;
}