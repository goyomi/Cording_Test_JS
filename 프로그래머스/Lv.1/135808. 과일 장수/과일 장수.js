function solution(k, m, score) {
    let answer = 0;
    score.sort((a,b)=>b-a);
    for(let i=0; i<score.length; i+=m){
        let fruitBox = score.slice(i, i+m);
        if(fruitBox.length === m){
            answer += fruitBox[fruitBox.length - 1] * fruitBox.length;
        }
    }
    return answer;
}