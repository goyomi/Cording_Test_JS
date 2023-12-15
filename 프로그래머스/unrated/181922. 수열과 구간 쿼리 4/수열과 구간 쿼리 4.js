function solution(arr, queries) {
    // 1. queries >> querie = [s, e, k]
    // 2. querie의 인덱스가 s <= i <=e 가 참이면서 i가 k의 배수인 경우 찾기
    // 3. arr[i]에 ++
    
    for(const querie of queries){
        let s = querie[0], e = querie[1], k = querie[2];
        
        for(let i=s; i<=e; i++){
            if(i % k === 0) arr[i]++
        }
    }
    
    return arr;
}