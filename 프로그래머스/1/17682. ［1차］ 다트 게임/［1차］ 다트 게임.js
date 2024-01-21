function solution(dartResult) {
    let dartValues = [];
    let score = 0;
    
    for(let i=0; i<dartResult.length; i++){
        let char = dartResult[i];
        
        if(!isNaN(char)){
            if(char === '0' && 
            dartValues.length > 0 && 
            dartValues[dartValues.length - 1] === 1){
                dartValues[dartValues.length - 1] = 10;
            }else{
                dartValues.push(Number(char));
            }
        }else{
            switch(char){
                case 'S':
                    break;
                case 'D':
                    dartValues[dartValues.length -1] = Math.pow(dartValues[dartValues.length -1], 2);
                    break;
                case 'T':
                    dartValues[dartValues.length -1] = Math.pow(dartValues[dartValues.length -1], 3);
                    break;
                case '*':
                    dartValues[dartValues.length -1] *= 2;
                    if (dartValues.length > 1) {
                        dartValues[dartValues.length - 2] *= 2;
                    }
                    break;
                case '#':
                    dartValues[dartValues.length - 1] *= -1;
                    break;
            }
        }
    }

    return dartValues.reduce((acc, cur) => acc + cur, 0);
}