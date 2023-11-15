function solution(s) {
    const words = s.split(' ');
    const transformedWords = words.map(word => {
        let transformedWord = ''
        
        for(let i=0; i<word.length; i++){
            transformedWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        
        return transformedWord;
    })
    
    return transformedWords.join(' ');
}