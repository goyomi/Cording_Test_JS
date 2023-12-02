const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let numbers = line.split(' ').map(Number);
    const a = numbers[0];
    const b = numbers[1];
    
    console.log(`${a} + ${b} = ${a + b}`)
    
    rl.close();
}).on('close', function () {
    process.exit();
});