function solution(numbers) {
    const stack = [];
    const result = Array(numbers.length).fill(-1);
    
    numbers.forEach((num, idx) => {
        while(stack.length > 0 && numbers[stack[stack.length -1]] < num){
            const topIdx = stack.pop();
            result[topIdx] = num;
        }
        stack.push(idx);
    });
    
    return result;
}
