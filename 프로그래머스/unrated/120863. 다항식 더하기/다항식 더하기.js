function solution(polynomial) {
    let variableX = polynomial.split(' + ');
    let xSum = 0;
    let integerSum = 0;
    let result = '';
    
    variableX.forEach(val=> {
        if(val.includes('x')){
            let changeOne = val.replace('x', "") || '1'
            xSum += parseInt(changeOne);
        }else{
            integerSum += parseInt(val);
        }
    });


    if(xSum){
        result += xSum === 1 ? 'x' : `${xSum}x`;
    }
    
    if(integerSum){
        result += result ? ` + ${integerSum}` : `${integerSum}`;
    }
    
    return result || 0;
    
}