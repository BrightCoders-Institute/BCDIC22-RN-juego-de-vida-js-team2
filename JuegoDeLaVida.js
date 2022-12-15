let campo = new Array(0)
for (let i = 0; i < 4; i++) {
    campo[i] = new Array(0)
}

function random (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

const random2 = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

const fila = random(4, 8) // i
const columna = random(8, 16) // j
console.log(fila)
console.log(columna)
// let cuentaPuntos = 0

for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
        const random = Math.floor(Math.random() * 2)
        random === 1 ? campo.push(['*']) : campo.push(['.'])
        // cuentaPuntos = +1

        if (i > 0) {
            campo = campo.slice(-(columna))
        }
    }

    // console.log(campo.join(''))
    // console.log(cuentaPuntos)
}

/*
// comparar células
const iterator = campo.values();

for (const value of iterator) {
    console.log(value);
}
*/

const punto = '.'
// let c = 0
for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
        if (campo[j].includes(punto) === true) {
            // console.log(campo[j], j)
            // c++
        }
    }
}
// console.log(c)

module.exports = random2
