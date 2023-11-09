function solution(s) {
    // 공백 없애고 숫자로 변환
    let numArr = s.split(' ').map(txt => parseInt(txt));
    // 최소값, 최대값
    let minVal = Math.min(...numArr);
    let maxVal = Math.max(...numArr);
    
    return `${minVal} ${maxVal}`
}