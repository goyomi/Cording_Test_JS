function solution(arr1, arr2) {
    let newArray = [];
 
    for(let i=0; i<arr1.length; i++){
        newArray.push([]);
        for(let j=0; j<arr1[i].length; j++){
            newArray[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    
    return newArray;
}