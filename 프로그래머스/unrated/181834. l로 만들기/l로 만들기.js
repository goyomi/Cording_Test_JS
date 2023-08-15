function solution(myString) {
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k"];
    let string = myString;
    
    alpha.forEach(letter=>{
        while (string.includes(letter)){
            string = string.replace(letter,"l")
        }
    });
    return string;
}