function solution(numbers, hand) {
    let result = '';
    let leftPos = '*';
    let rightPos = '#';
    
    const distance = (pos, number) => {
        const keypad = {
            '1': [0,0], '2': [0,1], '3': [0,2],
            '4': [1,0], '5': [1,1], '6': [1,2],
            '7': [2,0], '8': [2,1], '9': [2,2],
            '*': [3,0], '0': [3,1], '#': [3,2]
        };
        const [x, y] = keypad[pos];
        const [numberX, numberY] = keypad[number.toString()];
        return Math.abs(x - numberX) + Math.abs(y - numberY);
    }
    
    for(const number of numbers){
        if(number === 1 || number === 4 || number === 7){
            result += 'L';
            leftPos = number;
        }else if(number === 3 || number === 6 || number === 9){
            result += 'R';
            rightPos = number;
        }else{
            const leftDist = distance(leftPos, number);
            const rightDist = distance(rightPos, number);
            if(leftDist < rightDist || 
            (leftDist === rightDist && hand === 'left')){
                result += 'L';
                leftPos = number;
            }else{
                result += 'R';
                rightPos = number;
            }
        }
    }
    
    return result;
}