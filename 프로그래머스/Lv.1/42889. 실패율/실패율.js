function solution(N, stages) {
    let stageFailCount = {};
    let stageReachedCount = {};
    
    for(let i = 1; i <= N; i++){
        stageFailCount[i] = 0;
        stageReachedCount[i] = 0;
    }
    
    stages.forEach(stage => {
        for(let i = 1; i <= N; i++){
            if(stage >= i) {
                stageReachedCount[i]++;
            }
            if(stage === i) {
                stageFailCount[i]++;
            }
        }
    });
    
    let failRates = [];
    for(let i = 1; i <= N; i++){
        let failRate = stageReachedCount[i] === 0 ? 0 : stageFailCount[i] / stageReachedCount[i];
        failRates.push({stage: i, failRate: failRate});
    }
    
    failRates.sort((a, b) => {
        if(b.failRate === a.failRate){
            return a.stage - b.stage;
        }
        return b.failRate - a.failRate;
    });
    
    return failRates.map(fr => fr.stage);
}
