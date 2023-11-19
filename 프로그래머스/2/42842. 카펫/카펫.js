function solution(brown, yellow) {
    const extent = brown + yellow;
    let width = 0;
    let height = 0;
    
    for(let i=1; i<=extent; i++){
        for(let j=1; j<=i; j++){
            if(i * j === extent && yellow === (i - 2)*(j - 2)){
                width = i;
                height = j;
                return [width, height];
            } 
        }
    }
}