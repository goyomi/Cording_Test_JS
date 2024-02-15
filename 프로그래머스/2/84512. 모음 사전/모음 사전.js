function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;

    for (let i=0; i<word.length; i++) {
        const index = vowels.indexOf(word[i]);
        for (let j=0; j<5-i; j++) {
            answer += index * (5 ** j);
        }
        answer += 1;
    }

    return answer;
}
