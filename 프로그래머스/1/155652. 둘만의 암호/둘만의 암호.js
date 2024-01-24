function solution(s, skip, index) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(const char of s){
        let currentIndex = alphabet.indexOf(char);
        let newIndex = currentIndex;
        
        for(let i=0; i<index; i++){
            newIndex = (newIndex + 1) % alphabet.length;
            while(skip.includes(alphabet[newIndex])){
                newIndex = (newIndex + 1) % alphabet.length;
            }
        }
        result += alphabet[newIndex];
    }

    return result;
}