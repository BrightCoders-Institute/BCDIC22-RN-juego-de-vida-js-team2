
// se crea un array
function Gencampo () {
    const fila = 4
    const campogen = new Array(fila)

    for (let i = 0; i < campogen.length; i++) {
        campogen[i] = new Array(fila)
    }

    return campogen
}

// se le da la aleatoriedad a el array de arriba referente a
// tamaño

function genRandomArray () {
    const array2 = Gencampo()
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array2[i].length; j++) {
            array2[i][j] = Math.random() < 0.4
        }
    }
    return array2

    // return Math.floor((Math.random() * (max - min + 1)) + min);
}

function muesGen (generador) {
    let arrayDeString = ''
    console.log('Nueva Generacion')
    for (let i = 0; i < generador.length; i++) {
        for (let j = 0; j < generador[i].length; j++) {
            if (generador[i][j]) {
                arrayDeString += '*'
            } else {
                arrayDeString += '.'
            }
        }
        console.log(arrayDeString)
        arrayDeString = '' // ...
    }
}

function requisitos (conds) {
    const gen = Gencampo()
    for (let fila = 0; fila < conds.length; fila++) {
        for (let columna = 0; columna < conds[fila].length; columna++) {
            let viven = 0
            if (fila !== 0) {
                if (columna !== 0) {
                    if (conds[fila - 1][columna - 1]) {
                        viven++
                    }
                }
                if (columna !== 7) {
                    if (conds[fila - 1][columna + 1]) {
                        viven++
                    }
                }

                if (conds[fila - 1][columna]) {
                    viven++
                }
            }

            if (fila !== 3) {
                if (columna !== 0) {
                    if (conds[fila + 1][columna - 1]) {
                        viven++
                    }
                }

                if (columna !== 7) {
                    if (conds[fila + 1][columna + 1]) {
                        viven++
                    }
                }

                if (conds[fila + 1][columna]) {
                    viven++
                }
            }

            if (columna !== 0) {
                if (conds[fila][columna - 1]) {
                    viven++
                }
            }

            if (columna !== 7) {
                if (viven === 2 || viven === 3) {
                    gen[fila][columna] = true
                } else {
                    gen[fila][columna] = false
                }
            } else {
                if (viven === 3) {
                    gen[fila][columna] = true
                } else {
                    gen[fila][columna] = false
                }
            }
        }
    }
    console.log(gen)
    return gen
}

function iterator () {
    const gens = 4

    let arrayLlenado
    let curavaLlenado = Gencampo()

    for (let i = 0; i < gens; i++) {
        if (i === 0) {
            arrayLlenado = genRandomArray()
        } else {
            arrayLlenado = requisitos(curavaLlenado)
        }
        muesGen(arrayLlenado)
        curavaLlenado = arrayLlenado
    }
}

iterator()
// const array = [1, 2, 3, 4, 5]

// console.log(muesGen(array))
// console.log(iterator())

/*
let fila = random(4, 8); //i
let columna = random(8, 16); //j
console.log(fila);
console.log(columna);
let cuentaPuntos = 0;

for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
        let random = Math.floor(Math.random() * 2);
        random == 1 ? campo.push([`*`]) : campo.push([`.`]);
        cuentaPuntos =+ 1;

        if (i > 0){
        campo = campo.slice(-(columna));
        }
    }

    console.log(campo.join(''));
    console.log(cuentaPuntos);
}

//comparar células
const iterator = campo.values();

for (const value of iterator) {
    console.log(value);
}

let punto = `.`;
let c =0;
for (var i = 0; i < fila; i++) {
    for(var j = 0; j < columna; j++){
        if (campo[j].includes(punto) == true) {
            console.log(campo[j],j);
            c++;
        }
    }
}
console.log(c);
*/
