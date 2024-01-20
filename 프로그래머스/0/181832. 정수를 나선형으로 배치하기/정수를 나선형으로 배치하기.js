function solution(n) {
    let arr = Array.from({length:n}, ()=> Array(n).fill(0));
    let x = 0, y = 0;
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let direction = 0;
    let num = 1; 
    
    while (num <= n * n){
        arr[x][y] = num++;
        let nx = x + dx[direction];
        let ny = y + dy[direction];
        
        if(nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] !== 0){
            direction = (direction + 1) % 4;
            nx = x + dx[direction];
            ny = y + dy[direction];
        }
        x = nx;
        y = ny;
    }
    
    return arr;
}