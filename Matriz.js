let campo = new Array(0);
for (var i = 0; i < 4; i++) {
    campo[i] = new Array(0);
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let fila = random(4, 8); //i
let columna = random(8, 16); //j
console.log(fila);
console.log(columna);

for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
        let random = Math.floor(Math.random() * 2);
        random == 1 ? campo.push([`*`]) : campo.push([`.`]);
        if (i > 0){
            campo = campo.slice(-(columna));
        }
    }
    console.log(campo.join(''));
}

/*
transformar un array a cadena
let myArray = new Array();
const cadena = campo.toString();

console.log(cadena);

myArray = cadena.split(",");*/

/*for(let i = 0; i < 4; i++){
    for (let j = 0; j < 8; j++) {
        myArray = myArray.push("\n");
    }
}

//console.log(myArray);
*/