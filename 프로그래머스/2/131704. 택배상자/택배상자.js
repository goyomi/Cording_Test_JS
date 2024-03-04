function solution(order) {
    const stack = [];
    let count = 0;
    let currentBox = 1;
    
    for(let i=0; i<order.length; i++){
        while(currentBox <= order[i]){
            stack.push(currentBox);
            currentBox++;
        }

        if(stack[stack.length - 1] === order[i]){
            stack.pop();
            count++
        }else{
            break;
        }
        
        while(stack.length > 0 && stack[stack.length - 1] === order[i + 1]){
            stack.pop();
            count++;
            i++;
        }
    }
    
    return count;
}