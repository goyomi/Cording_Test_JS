function solution(arr, n) {
    const arrLen = arr.length;
    if(arrLen%2!==0){
        for(let i=0; i<arrLen; i+=2){
            arr[i]=arr[i]+n;
        }
    }else{
        for(let i=1; i<arrLen; i+=2){
            arr[i]=arr[i]+n;
        }
    }
    return arr;
}