function solution(s){
    let first = '';
    let second = '';
    for(let i=0; i<s.length; i++){
        if(s[i]==='p'|| s[i]==='P') first+=s[i];
        if(s[i]==='y'|| s[i]==='Y') second+=s[i];
    }
    return first.length===second.length?true:false;
}