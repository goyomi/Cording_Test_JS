function solution(num_list) {
    const listLength = num_list.length;
    if(11<=listLength){
        return num_list.reduce((acc,cur)=>acc+cur,0);
    }else if(listLength<=10){
        return num_list.reduce((acc,cur)=>acc*cur)
    }
}
