function solution(s) {
    const strArray = [...s];
    const desOrder = strArray.sort((a,b)=>{
    // 두 문자가 대문자 이거나 소문자인 경우 => 내림차순 큰 것부터 
        if((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() &&  b === b.toLowerCase())) {
            return (b > a) ? 1 : (b < a) ? -1 : 0;
        // a가 소문자, b는 대문자 a가 앞으로
        } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
            return -1;
        // a가 대문자, b는 소문자 b가 앞으로
        } else {
            return 1;
        }
    })
    return desOrder.join('');
}