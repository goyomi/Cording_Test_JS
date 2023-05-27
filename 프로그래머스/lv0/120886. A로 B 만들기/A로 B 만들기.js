function solution(before, after) {
    const splBefore = before.split('').sort().join('')
    const splAfter = after.split('').sort().join('')
    return splBefore===splAfter ? 1: 0;
}