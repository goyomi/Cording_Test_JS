function solution(s) {
    const rotateStr = s + s;
    let count = 0;

    for(let i=0; i<s.length; i++){
        let brackets = rotateStr.slice(i, i+s.length);
        if(isVailed(brackets)) count++;
    }
    
    return count++;
}

function isVailed(str){
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for(const char of str){
        if(['(', '[', '{'].includes(char)){
            stack.push(char);
        }else if(stack.length === 0 || stack.pop() !== pairs[char]){
            return false;
        }
    }
    
    return stack.length === 0;
}