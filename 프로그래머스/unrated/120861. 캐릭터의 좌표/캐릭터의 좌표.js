function solution(keyinput, board) {
    let result = [0, 0];
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    keyinput.forEach(key => {
        switch(key){
            case 'left':
                if(result[0] > -maxX) result[0] -= 1;
                break;
            case 'right':
                if(result[0] < maxX) result[0] += 1;
                break;
            case 'up':
                if(result[1] < maxY) result[1] += 1;
                break;
            case 'down':
                if(result[1] > -maxY) result[1] -= 1;
                break;
            default:
                break;
        }
    });
    
    return result;
}