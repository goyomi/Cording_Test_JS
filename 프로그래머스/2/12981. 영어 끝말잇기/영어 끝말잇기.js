function solution(n, words) {
    let stack = [];

    for(let i=0; i<words.length; i++){
        if(i === 0){
            stack.push(words[i]);
            continue;
        }
        
        let lastWord = stack[stack.length -1];
        let currentWord = words[i];
        // 탈락: 마지막 단어의 끝자리와 현재단어의 앞글자가 다르다면, 이미 사용된 단어 사용
        // [탈락자의 번호, 탈락자의 차례]
        if(lastWord[lastWord.length - 1] !== currentWord[0] || stack.includes(currentWord)){
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }
        stack.push(currentWord);
    }
    return [0, 0];
}