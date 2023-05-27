function solution(my_string) {
    let noRepeat = [...new Set(my_string)];
    return noRepeat.join('')
}