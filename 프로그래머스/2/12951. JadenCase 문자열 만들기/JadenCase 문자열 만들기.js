function solution(s) {
    return s.split(' ').map(word => {
        if(word[0] && word[0].match(/[a-zA-Z]/)) {
            return word.charAt(0).toUpperCase() 
                + word.substring(1).toLowerCase();
        } else {
            return word.toLowerCase();
        }
    }).join(' ');    
}