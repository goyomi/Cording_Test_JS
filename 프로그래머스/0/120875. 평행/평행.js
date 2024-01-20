function solution(dots) {
    const getSlope = (dot1, dot2) => {
        return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    };
    
    for(let i=0; i<3; i++){
        for(let j=i+1; j<4; j++){
            for(let k=0; k<3; k++){
                for(let l=k+1; l<4; l++){
                    if(i !== k && i !== l && j !== k && j !==l){
                        let slope1 = getSlope(dots[i], dots[j]);
                        let slope2 = getSlope(dots[k], dots[l]);
                        
                        if(slope1 === slope2) return 1;
                    }
                }
            }
        }
    }
    return 0;
}