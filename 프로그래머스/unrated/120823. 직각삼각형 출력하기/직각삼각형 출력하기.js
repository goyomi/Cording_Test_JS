const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const n = Number(line);
    
    let output = ''
    for(let i=1; i<=n; i++){
        for(let j=0; j<i; j++){
            output += '*'
        }
        output += '\n'
    }
    console.log(output)
    
    rl.close();
}).on('close', function () {
    process.exit();
});