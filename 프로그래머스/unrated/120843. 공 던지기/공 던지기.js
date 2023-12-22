function solution(numbers, k) {
    let count = 1;
    let i = 0;
    
    while(count < k){
        i = (i + 2) % numbers.length;
        count++;
    }
    
    return numbers[i];
}