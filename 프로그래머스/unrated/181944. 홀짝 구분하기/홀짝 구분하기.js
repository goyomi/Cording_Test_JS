const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const n = Number(line);
    
    if(n % 2 === 0){
        console.log(n + " is even");
    }else {
        console.log(n + " is odd");
    }
    
    rl.close();
}).on('close', function () {
    process.exit();
});
