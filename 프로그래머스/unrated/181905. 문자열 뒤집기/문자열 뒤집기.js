function solution(my_string, s, e) {
    const myStr = [...my_string];
    let reverseStrArr = myStr.slice(s, e + 1).reverse().join('');
    myStr.splice(s, e - s + 1, reverseStrArr);
    
    return myStr.join('');
}