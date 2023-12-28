function solution(arr) {
    
    for(let i=0; i<arr.length; i++){
        if(arr.length > arr[i].length){
            while(arr.length !== arr[i].length){
                arr[i].push(0);
            }
        }else{
            while(arr.length !== arr[i].length){
                arr.push([]);
            }
        }
    }

    return arr;
}