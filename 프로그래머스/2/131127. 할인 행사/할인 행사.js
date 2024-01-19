function solution(want, number, discount) {
    let totalDays = 0;
    let wantMap = new Map();
    
    for(let i=0; i<want.length; i++){
        wantMap.set(want[i], number[i]);
    }
    
    for(let i=0; i<=discount.length - 10; i++){
        let currentWindow = discount.slice(i, i + 10);
        let windowMap = new Map(wantMap);
        
        currentWindow.forEach(product => {
            if(windowMap.has(product)){
                windowMap.set(product, windowMap.get(product) - 1);
            }
        });
        
        if(Array.from(windowMap.values()).every(count => count <= 0)){
            totalDays++
        }
    }
    
    return totalDays;
}