const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let str = line;
    let newStr = '';
    
    for(let i=0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        }else{
            newStr += str[i].toLowerCase();
        }
    }
    
console.log(newStr);
    
    rl.close();
});
