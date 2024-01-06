function solution(l, r) {
    let result = [];
    
    for(let i=l; i<=r; i++){
        const regexp = new RegExp(/^[05]+$/);
        if(regexp.test(i.toString())) result.push(i);
    }
    
    return result.length === 0 ? [-1] : result;
}