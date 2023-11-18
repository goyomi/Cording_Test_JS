function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.map((v) => {
        if(v[0] < v[1]){
            let temp = v[0]
            v[0] = v[1];
            v[1] = temp;
        }
        maxWidth = Math.max(maxWidth, v[0]);
        maxHeight = Math.max(maxHeight, v[1]);
    })

    return maxWidth * maxHeight
}