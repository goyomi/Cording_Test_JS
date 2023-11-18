function solution(s, n) {
    // 0: 48 9: 57 // A: 65 Z: 90 // a: 97 z: 122 
    // charCodeAt(), String.fromCharCode()
    let answer = ''
    
    s.split('').map((char) => {
        const charCode = char.charCodeAt(0);
        let shift = charCode + n;
  
        if(char === ' ') {
            answer += char;
        } else if(charCode >= 65 && charCode <= 90) {
            if(shift > 90) shift -= 26;
            answer += String.fromCharCode(shift);
        } else if(charCode >= 97 && charCode <= 122) {
            if(shift > 122) shift -= 26;
            answer += String.fromCharCode(shift);
        }        
    })
    
    return answer;
}