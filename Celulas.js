class Celulas {
    matrizCelulas
    fila
    columna

    // constructor
    constructor () {
        this.setMatrizCelulas()
        this.setFila()
        this.setColumna()
    }

    // setters
    setMatrizCelulas () {
        this.matrizCelulas = []
    }

    setFila () {
        this.fila = this.random(4, 8) // i
    }

    setColumna () {
        this.columna = this.random(8, 16) // j
    }

    // función para obtener números random
    random (min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min)
    }

    // función para llenar la matriz
    llenarMatriz () {
        for (let i = 0; i < this.fila; i++) {
            this.matrizCelulas[i] = new Array(0)
        }

        console.log(this.fila)
        console.log(this.columna)

        for (let i = 0; i < this.fila; i++) {
            for (let j = 0; j < this.columna; j++) {
                const random = Math.floor(Math.random() * 2)
                random === 1 ? this.matrizCelulas.push(['*']) : this.matrizCelulas.push(['.'])
                if (i > 0) {
                    this.matrizCelulas = this.matrizCelulas.slice(-(this.columna))
                }
            }
            console.log(this.matrizCelulas.join(''))
        }
    }

    compararCelulas () {
        const punto = '.'
        let dead
        // const asterisco = '*';
        for (let i = 0; i < this.fila; i++) {
            if (i === 0) {
                for (let j = 0; j < this.columna; j++) {
                    dead = this.matrizCelulas[j].filter(celula => celula === punto)
                    console.log(i, ',', j, dead)
                }
            }
        }
    }
}

const celula = new Celulas()
console.log(celula.llenarMatriz())
// console.log(celula.compararCelulas())
