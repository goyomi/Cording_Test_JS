function solution(board, moves) {
    let count = 0;
    let stack = [];

    for(const move of moves) {
        for(let i = 0; i<board.length; i++){
            let doll = board[i][move - 1];
            if(doll !== 0){
                if(stack[stack.length - 1] === doll){
                    stack.pop();
                    count += 2;
                }else{
                    stack.push(doll);
                }
                board[i][move - 1] = 0;
                // 인형을 뽑았으므로 해당 위치를 0으로 설정
                break;
            }
        }
    }
    
    return count;
}
