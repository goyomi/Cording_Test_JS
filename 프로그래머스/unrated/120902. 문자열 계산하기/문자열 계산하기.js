function solution(my_string) {
    const element = my_string.split(' ');
    let result = parseInt(element[0]);
    
    for(let i=1; i<element.length; i+=2){
        let sign = element[i];
        let nextNumber = parseInt(element[i + 1]);
        
        if(sign === '+'){
            result += nextNumber;
        }else if(sign === '-'){
            result -= nextNumber;
        }
    }
    
    return result;
}