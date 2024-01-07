function solution(code) {
    let ret = '';
    let mode = 0;
    
    for(let idx=0; idx<code.length; idx++){
        if(code[idx] === '1'){
            mode = 1 - mode;
            continue;
        }
    
        if(!mode && idx % 2 === 0 || mode && idx % 2 !== 0){
            ret += (code[idx]);
        }
    }
    
    return ret.length === 0 ? "EMPTY" : ret;
}