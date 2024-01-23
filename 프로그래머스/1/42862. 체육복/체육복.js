function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    
    let realLost = new Set(lost.filter(l => !reserve.includes(l)));
    let realReserve = new Set(reserve.filter(r => !lost.includes(r)));

    for (let r of realReserve) {
        if(realLost.has(r - 1)) {
            realLost.delete(r - 1);
        }else if(realLost.has(r + 1)) {
            realLost.delete(r + 1);
        }else if(realLost.has(r)){
            realLost.delete(r);
        }
    }

    return n - realLost.size;
}
