function solution(array) {
    let modeObj = {};
    let mode = 0;
    let modeCount = 0;
    let isMultipleMode = false;
    
    for(const val of array){
        modeObj[val] = (modeObj[val] || 0) + 1;
    }
    
    for(const [num, count] of Object.entries(modeObj)){
        if(modeCount < count){
            modeCount = count
            mode = num;
            isMultipleMode = false;
        }else if(modeCount === count){
            isMultipleMode = true;
        }
    }
    
    return isMultipleMode ? -1 : parseInt(mode);
}
