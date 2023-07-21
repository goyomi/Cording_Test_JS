function solution(num_list, n) {
    let list = [];
    for(let i=n; i<num_list.length+1; i++){
        list.push(num_list[i-1]);
    }
    return list;
}