function solution(board) {
    const n = board.length;
    const dangerZone = new Set();
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] === 1){
                for(let dx=-1; dx<=1; dx++){
                    for(let dy=-1; dy<=1; dy++){
                        const nx = i + dx;
                        const ny = j + dy;
                        if(nx>=0 && nx<n && ny>=0 && ny<n){
                            dangerZone.add(`${nx},${ny}`)
                        }
                    }
                }
            }
        }
    }
    
    return n * n - dangerZone.size;
}