function solution(num_list, n) {
    let list = [];
    
    for(let i=n; i<num_list.length; i++){
        list.push(num_list[i]);
    }
    
    for(let i=0; i<n; i++){
        list.push(num_list[i])
    }

    return list;
}