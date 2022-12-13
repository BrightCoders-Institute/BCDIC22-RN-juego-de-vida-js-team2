let campo = new Array();
for (var i = 0; i < 4; i++) {
    campo[i] = new Array(8);
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let c = random(9, 20);

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
        let random = Math.floor(Math.random() * 2);
        random == 1 ? campo[i][j] = "*" : campo[i][j] = ".";
    }
    console.log(campo[i]);
}
//console.log(campo);
//console.log(c);