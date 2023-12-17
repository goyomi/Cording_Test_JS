function solution(array) {
    const joinValue = array.join('').split('');
    let count = 0;
    
    joinValue.forEach(v => {if(v === '7') count++})
    
    return count
}