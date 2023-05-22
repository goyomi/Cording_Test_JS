function solution(numbers, direction) {
    if(direction === 'right'){
        numbers.unshift(numbers.pop());
    } else if (direction === 'left'){
        numbers.push(numbers.shift())
    }
    return numbers;
}

// unshift() 메소드는 새로운 요소를 배열의 맨 앞에 추가하고, pop() 메소드는 배열의 마지막 요소를 제거하고 반환 => 오른쪽으로 도는 거
// push() 메소드는 새로운 요소를 배열의 마지막에 추가하고, shift() 메소드는 배열의 첫 번째 요소를 제거하고 반환 => 왼쪽으로 도는 거 