const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const values = line.split(' ');
    const str = values[0];
    const n = Number(values[1]);
    
    console.log(str.repeat(n));
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
});