function solution(my_string) {
    let res = new Array(52).fill(0);
    
    for(let i=0; i<my_string.length; i++){
        if(my_string[i] === my_string[i].toUpperCase()){
            // 대문자인 경우
            res[my_string.charCodeAt(i) - 65]++
        }else{
            // 소문자인 경우 
            res[26 + my_string.charCodeAt(i) - 97]++
        }
    }
    
    return res;
}