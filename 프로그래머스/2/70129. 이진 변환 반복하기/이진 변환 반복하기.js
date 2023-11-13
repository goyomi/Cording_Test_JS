function solution(s) {
    let changeBinary = 0;
    let removedZero = 0;
    
    while(s !== "1"){
        const lengthBefore = s.length;
        s = s.replace(/0/g, '');
        const lengthAfter = s.length;
        removedZero += lengthBefore - lengthAfter;
        
        s = lengthAfter.toString(2)
        changeBinary++
    }
    
    return [changeBinary, removedZero]
}