function solution(myString, pat) {
    let content = ''
    for(let i=0; i<myString.length; i++){
        if(myString[i]==="A"){
            content+="B"
        }else content+="A"
    }
    
    return +content.includes(pat);
}