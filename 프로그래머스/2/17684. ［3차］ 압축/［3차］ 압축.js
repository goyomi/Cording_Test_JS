function solution(msg) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const dictionary = new Map();
    const result = [];
    let dictSize = 26;
    
    alphabet.split('').forEach((v, i) => dictionary.set(v, i+1));
    
    for(let i=0; i<msg.length; i++){
        let str = msg[i];
        let idx = i + 1;
        
        while(dictionary.has(str+ msg[idx]) && idx <= msg.length){
            str += msg[idx];
            idx++;
        }

        result.push(dictionary.get(str));
        
        if(idx <= msg.length){
            dictionary.set(str + msg[idx], ++dictSize);
        }
        
        i = idx - 1;
    }
    
    return result;
}