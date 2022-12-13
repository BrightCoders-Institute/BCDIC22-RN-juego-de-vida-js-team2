const readLine = require('readline');
const f = require('fs');
var file = 'matrizCopia.txt';

// Copiar txt
f.copyFile('matriz.txt', 'matrizCopia.txt', (err) => {
    if (err)
        throw err;
    console.log('matriz.txt was copied to matrizCopia.txt');
});

var rl = readLine.createInterface({
    input: f.createReadStream(file),
    output: process.stdout,
    terminal: false
});

rl.on('line', function (text) {
    console.log(text);
});