function solution(elements) {
    const roundedElements = elements.concat(elements);
    let sums = new Set();
    
    for(let i=0; i<elements.length; i++){
        let sum = 0;
        for(let j=i; j<i+elements.length; j++){
            sum += roundedElements[j];
            sums.add(sum);
        }
    }
    
    return sums.size;
}