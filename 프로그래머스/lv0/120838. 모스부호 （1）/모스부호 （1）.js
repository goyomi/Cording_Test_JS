function solution(letter) {
    var answer = '';
    const morseLetter = letter.split(' ');
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};
    for(let i=0; i<morseLetter.length; i++){
        const morseVal = morseLetter[i]
        if(morseVal in morse){
            answer+=morse[morseVal];
        }
    }
    return answer;
}
