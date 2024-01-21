function solution(lottos, win_nums) {
    let zeroCount = lottos.filter(lotto => lotto === 0).length;
    let winCount = lottos.filter(lotto => win_nums.includes(lotto)).length; 
    
    let maxRank = 7 - (winCount + zeroCount);
    let minRank = 7 - winCount;
    
    maxRank = maxRank > 6 ? 6 : maxRank;
    minRank = minRank > 6 ? 6 : minRank;

    return [maxRank, minRank];
}