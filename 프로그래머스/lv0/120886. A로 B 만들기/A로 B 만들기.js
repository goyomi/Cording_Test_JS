function solution(before, after) {
    const splBefore = before.split('').sort().join('')
    const splAfter = after.split('').sort().join('')
    if(splBefore===splAfter){
        return 1;
    } else return 0;
}