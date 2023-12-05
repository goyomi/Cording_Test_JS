function solution(arr, queries) {
    
    for(let i=0; i<queries.length; i++){
        let start = queries[i][0];
        let end = queries[i][1];
        
        for(let j=start; j<=end; j++){
            arr[j] += 1;
        }
        
    }

    return arr; 
}