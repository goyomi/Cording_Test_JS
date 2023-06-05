function solution(s) {
    let uniqTxt = [...new Set(s)];
    let answer = uniqTxt.filter(v=> s.indexOf(v)===s.lastIndexOf(v));
    return answer.sort().join('');
}