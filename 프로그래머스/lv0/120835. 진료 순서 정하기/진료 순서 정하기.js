function solution(emergency) {
    var answer = [];
    const temp = [...emergency].sort((a,b)=>b-a);
    for(let i=0; i<emergency.length; i++){
        answer.push(temp.indexOf(emergency[i])+1);
    }
    return answer;
}

// 76 24 3
// 1 2 3 ==> temp index+1
// 3, 76, 24