function solution(nums) {
    const getPoketmon = nums.length/2
    let oNums = new Set(nums);
    return oNums.size >= getPoketmon ? getPoketmon : oNums.size;
}
