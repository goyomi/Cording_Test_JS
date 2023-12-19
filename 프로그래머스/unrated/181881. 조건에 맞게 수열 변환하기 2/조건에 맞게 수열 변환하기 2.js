function solution(arr) {
    let count = 0;
    let newArr = [];
    
    while(true){
        newArr = arr.map(val => {
            if(val >= 50 && val % 2 === 0){
                return val / 2;
            }else if(val < 50 && val % 2 !== 0){
                return (val * 2) + 1;
            }else{
                return val;
            }
        });
        
        if(arrayEqual(arr, newArr)){
            break;
        }
        
        arr = [...newArr];
        count++
    }

    return count;
}

function arrayEqual(a, b){
    if(a.length !== b.length) return false;
    for(let i=0; i<a.length; i++){
        if(a[i] !== b[i]) return false;
    }    
    return true;
}