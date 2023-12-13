function solution(arr) {
    let len = arr.length;
    let targetLength = 1;

    while (targetLength < len) {
        targetLength *= 2;
    }

    while (arr.length < targetLength) {
        arr.push(0);
    }

    return arr;
}
