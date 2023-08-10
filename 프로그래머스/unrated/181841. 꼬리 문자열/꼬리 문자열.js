function solution(str_list, ex) {
    let answer = '';
    const str = str_list.slice('');
    str.map((v)=>{
        if(!v.includes(ex)) answer+=v;
    })
    return answer;
}