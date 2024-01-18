function solution(babbling) {
    let validSounds = ["aya", "ye", "woo", "ma"];
    let validWords = 0;

    babbling.forEach(word => {
        let isValidWord = true;
        let previousSound = "";
        
        while(word.length > 0 && isValidWord){
            let foundValidSound = false;
            for(let sound of validSounds){
                if(word.startsWith(sound) && sound !== previousSound){
                    word = word.substring(sound.length);
                    previousSound = sound;
                    foundValidSound = !foundValidSound;
                    break;
                }
            }
            if(!foundValidSound) isValidWord = !isValidWord;
        }
        if(isValidWord) validWords++;
    });
    
    return validWords;
}