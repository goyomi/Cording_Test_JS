function solution(num, k) {
    let numArr = num.toString().split('');
    for(let i=0; i<numArr.length; i++){
        if(parseInt(numArr[i])===k) return i+1;
    }
    return -1;
}