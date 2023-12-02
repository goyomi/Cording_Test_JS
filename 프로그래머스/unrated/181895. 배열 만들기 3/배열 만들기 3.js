function solution(arr, intervals) {
    intervals = intervals.flat();

    let answerArr = arr.slice(intervals[0], intervals[1] + 1)
                    .concat(arr.slice(intervals[2], intervals[3] + 1));

    return answerArr;
}