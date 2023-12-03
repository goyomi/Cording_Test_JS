const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
    
    for(const char of line){
        console.log(char);
    }
    
    rl.close()
}).on('close',function(){
    process.exit();
});