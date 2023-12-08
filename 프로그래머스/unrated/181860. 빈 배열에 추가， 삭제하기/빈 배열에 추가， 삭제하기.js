function solution(arr, flag) {
    let x = [];
    
    for(let i=0; i<flag.length; i++){
        if(flag[i]){
            for(let j=0; j<arr[i] * 2; j++){
                x.push(arr[i]);
            }
        }else{
            x.splice(-arr[i], arr[i]);
        }
    }
    
    return x;
}