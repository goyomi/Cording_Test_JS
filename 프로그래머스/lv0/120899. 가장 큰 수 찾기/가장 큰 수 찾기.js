function solution(array) {
    var maxVal = [0];
    var maxInd = 0;
    for(let i=0; i<array.length; i++){
        if(maxVal<array[i]) {
            maxVal = array[i];
            maxInd = i;
        }
    }
    return [maxVal, maxInd];
}