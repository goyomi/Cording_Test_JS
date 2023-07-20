function solution(arr) {
    let answerArray = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=50&&arr[i]%2===0){
            answerArray.push(arr[i]/2)
        } else if(arr[i]<=50&&arr[i]%2!==0){
            answerArray.push(arr[i]*2)
        } else {
            answerArray.push(arr[i])
        }
    }
    return answerArray;
}