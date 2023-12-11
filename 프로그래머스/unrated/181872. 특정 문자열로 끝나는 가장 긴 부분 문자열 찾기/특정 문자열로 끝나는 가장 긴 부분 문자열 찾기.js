function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat) + pat.length;
    return myString.slice(0, lastIndex);
}