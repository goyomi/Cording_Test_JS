function solution(my_string) {
    return noRepeat = [...new Set(my_string)].join('');
}