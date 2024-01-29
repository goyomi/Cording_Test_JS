function solution(players, callings) {
    const playerRanks = {};
    players.forEach((player, index) => {
        playerRanks[player] = index;
    });
    
    callings.forEach(calling => {
        const rank = playerRanks[calling]
        if(rank > 0){
            let temp = players[rank - 1];
            players[rank - 1] = players[rank];
            players[rank] = temp;
            
            playerRanks[calling] = rank - 1;
            playerRanks[temp] = rank;
        }
    });
    
    return players
}