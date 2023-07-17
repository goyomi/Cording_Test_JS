function solution(num_list) {
    let multiply=1;
    let plus=0;
    for(let i=0; i<num_list.length; i++){
        multiply*=num_list[i];
        plus+=num_list[i];
    }
    let square=plus*plus
    return multiply<square?1:0;
}