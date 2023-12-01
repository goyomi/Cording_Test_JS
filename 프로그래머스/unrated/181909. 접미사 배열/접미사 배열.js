function solution(my_string) {
    let suffixArr = [];
    
    for(let i=0; i<my_string.length; i++){
        suffixArr.push(my_string.slice(i));
    }
    
    return suffixArr.sort();
}