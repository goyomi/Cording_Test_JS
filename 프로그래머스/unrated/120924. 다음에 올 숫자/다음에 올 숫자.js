function solution(common) {
    const length = common.length;
    const lastNum = common[common.length - 1];
    
    if(common[1] - common[0] === common[2] - common[1]){
        const diff = common[1] - common[0];
        return lastNum + diff;
    }else{
        const ratio = common[1] / common[0];
        return lastNum * ratio;
    }

}