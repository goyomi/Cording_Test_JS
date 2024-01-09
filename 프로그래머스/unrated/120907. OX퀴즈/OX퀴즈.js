function solution(quiz) {
    const results = [];
    
    for(let formula of quiz){
        const parts = formula.split(' ');
        const X = parseInt(parts[0], 10);
        const Y = parseInt(parts[2], 10);
        const Z = parseInt(parts[4], 10);
        const operator = parts[1];
        
        let calculatedResult;
        if(operator === '+'){
            calculatedResult = X + Y;
        }else if(operator === '-'){
            calculatedResult = X - Y;
        }

        results.push(calculatedResult === Z ? "O" : "X");
    };
    
    return results;

}