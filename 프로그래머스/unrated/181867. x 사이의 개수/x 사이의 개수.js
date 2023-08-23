function solution(myString) {
    const str = myString.split("x");
    const arr = [];
    str.map(o=>arr.push(o.length));
    return arr;
}