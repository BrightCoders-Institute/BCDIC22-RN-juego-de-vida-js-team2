
// se crea un array
function Gencampo () {
    const campogen = new Array(0)
    // let fila = 4
    // let columna = 8

    for (let i = 0; i < campogen.length; i++) {
        campogen[i] = new Array(0)
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
    return gen
}

function iterator () {
    const gens = 5
    let arrayLlenado = Gencampo()
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
const array = [1, 2, 3, 4, 5]

console.log(muesGen(array))
console.log(iterator())
