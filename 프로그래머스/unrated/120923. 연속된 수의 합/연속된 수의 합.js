function solution(num, total) {
    let start = Math.floor((total / num) - (num / 2));
    
    while(true){
        let sum = 0;
        for(let i=start; i<start + num; i++){
            sum += i;
        }
        
        if(sum === total){
            return Array.from({length: num}, (_, i) => i + start);
        }
        
        sum < total ? start++ : start--;
    }
}
