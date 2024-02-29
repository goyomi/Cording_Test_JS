function solution(dirs) {
    let currentPos = [0, 0];
    const moves = {'U': [0, 1], 'D': [0, -1], 'R': [1, 0], 'L':[-1, 0]};
    const visited = new Set();
    
    for(const dir of dirs){
        const [dx, dy] = moves[dir];
        const newPos = [currentPos[0] + dx, currentPos[1] + dy];
        
        if(newPos[0] > 5 || newPos[0] < -5 || newPos[1] > 5 || newPos[1] < -5) continue;
        
        // 가는경로 & 오는경로 (똑같음)
        visited.add(currentPos.join(',') + ':' + newPos.join(','));
        visited.add(newPos.join(',') + ':' + currentPos.join(','));
        
        currentPos = newPos;
    }
    
    return visited.size / 2;
}