function solution(number) {
    return [...number].reduce((acc, cur) => acc + parseInt(cur) ,0) % 9;
}